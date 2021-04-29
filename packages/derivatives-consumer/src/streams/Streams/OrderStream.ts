import {
  StreamOrdersRequest,
  StreamOrdersResponse,
} from '@injectivelabs/exchange-api/injective_derivative_exchange_rpc_pb'
import { InjectiveDerivativeExchangeRPCClient } from '@injectivelabs/exchange-api/injective_derivative_exchange_rpc_pb_service'
import { StreamOperation } from '@injectivelabs/ts-types'
import { DerivativeTransformer } from '../../transformers/DerivativeTransformer'
import { DerivativeLimitOrder } from '../../types'

export type OrderStreamCallback = ({
  order,
  operation,
  timestamp,
}: {
  order: DerivativeLimitOrder | undefined
  operation: StreamOperation
  timestamp: number
}) => void

const transformer = (response: StreamOrdersResponse) => {
  const order = response.getOrder()

  return {
    order: order ? DerivativeTransformer.grpcOrderToOrder(order) : undefined,
    operation: response.getOperationType() as StreamOperation,
    timestamp: response.getTimestamp(),
  }
}

export class OrderStream {
  protected client: InjectiveDerivativeExchangeRPCClient

  protected endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
    this.client = new InjectiveDerivativeExchangeRPCClient(endpoint)
  }

  start({
    marketId,
    callback,
  }: {
    marketId: string
    callback: OrderStreamCallback
  }) {
    const request = new StreamOrdersRequest()
    request.setMarketId(marketId)

    const stream = this.client.streamOrders(request)

    stream.on('data', (response: StreamOrdersResponse) => {
      callback(transformer(response))
    })

    return stream
  }

  subaccount({
    marketId,
    subaccountId,
    callback,
  }: {
    marketId: string
    subaccountId: string
    callback: OrderStreamCallback
  }) {
    const request = new StreamOrdersRequest()
    request.setMarketId(marketId)
    request.setSubaccountId(subaccountId)

    const stream = this.client.streamOrders(request)

    stream.on('data', (response: StreamOrdersResponse) => {
      callback(transformer(response))
    })

    return stream
  }
}