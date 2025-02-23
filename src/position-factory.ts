import { PositionCreated as PositionCreatedEvent } from "../generated/PositionFactory/PositionFactory"
import { PositionCreated } from "../generated/schema"

export function handlePositionCreated(event: PositionCreatedEvent): void {
  let entity = new PositionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.positionAddress = event.params.positionAddress
  entity.lendingPool = event.params.lendingPool
  entity.baseCollateral = event.params._baseCollateral
  entity.leverage = event.params._leverage
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}
