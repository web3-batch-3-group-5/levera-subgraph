import { PositionCreated as PositionCreatedEvent, PositionDeleted as PositionDeletedEvent } from "../generated/PositionFactory/PositionFactory"
import { PositionCreated, PositionDeleted } from "../generated/schema"
import { Position as PositionTemplate } from "../generated/templates";

export function handlePositionCreated(event: PositionCreatedEvent): void {
  let entity = new PositionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.positionAddress = event.params.positionAddress
  entity.lendingPool = event.params.lendingPool
  entity.baseCollateral = event.params.baseCollateral
  entity.leverage = event.params.leverage
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
  PositionTemplate.create(event.params.positionAddress)
}

export function handlePositionDeleted(event: PositionDeletedEvent): void {
  let entity = new PositionDeleted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.positionAddress = event.params.onBehalf
  entity.lendingPool = event.params.lendingPool
  entity.caller = event.params.caller
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}
