import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { UserSupplyShare, UserPosition } from "../generated/LendingPool/LendingPool"

export function createUserSupplyShareEvent(
  caller: Address,
  supplyShare: BigInt,
  timestamp: BigInt
): UserSupplyShare {
  let userSupplyShareEvent = changetype<UserSupplyShare>(newMockEvent())

  userSupplyShareEvent.parameters = new Array()

  userSupplyShareEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  userSupplyShareEvent.parameters.push(
    new ethereum.EventParam(
      "supplyShare",
      ethereum.Value.fromUnsignedBigInt(supplyShare)
    )
  )
  userSupplyShareEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return userSupplyShareEvent
}

export function createUserPositionEvent(
  caller: Address,
  onBehalf: Address,
  collateralAmount: BigInt,
  borrowAmount: BigInt,
  timestamp: BigInt,
  isActive: boolean
): UserPosition {
  let userPositionEvent = changetype<UserPosition>(newMockEvent())

  userPositionEvent.parameters = new Array()

  userPositionEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  userPositionEvent.parameters.push(
    new ethereum.EventParam("onBehalf", ethereum.Value.fromAddress(onBehalf))
  )
  userPositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralAmount",
      ethereum.Value.fromUnsignedBigInt(collateralAmount)
    )
  )
  userPositionEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  userPositionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  userPositionEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )

  return userPositionEvent
}
