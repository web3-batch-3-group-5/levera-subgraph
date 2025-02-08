import {
  UserSupplyShare as UserSupplyShareEvent,
  UserPosition as UserPositionEvent
} from "../generated/LendingPool/LendingPool"
import {
  UserSupplyShare,
  UserPosition
} from "../generated/schema"

export function handleUserSupplyShare(event: UserSupplyShareEvent): void {
  let entity = new UserSupplyShare(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.supplyShare = event.params.supplyShare
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserPosition(event: UserPositionEvent): void {
  let entity = new UserPosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.onBehalf = event.params.onBehalf
  entity.collateralAmount = event.params.collateralAmount
  entity.borrowAmount = event.params.borrowAmount
  entity.timestamp = event.params.timestamp
  entity.isActive = event.params.isActive

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

