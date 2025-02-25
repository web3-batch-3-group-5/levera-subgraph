import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts";
import {
  UserSupplyShare as UserSupplyShareEvent,
  Supply as SupplyEvent,
  Withdraw as WithdrawEvent,
  AccrueInterest as AccrueInterestEvent,
  LendingPoolStats as LendingPoolStatsEvent,
} from "../generated/templates/LendingPool/LendingPool"
import {
  UserSupplyShare,
  Supply,
  Withdraw,
  AccrueInterest,
  LendingPoolStats
} from "../generated/schema"

export function handleLendingPoolStats(event: LendingPoolStatsEvent): void {
  let entity = new LendingPoolStats(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  entity.loanToken = event.params.loanToken
  entity.collateralToken = event.params.collateralToken
  entity.totalSupplyAssets = event.params.totalSupplyAssets
  entity.totalSupplyShares = event.params.totalSupplyShares
  entity.totalBorrowAssets = event.params.totalBorrowAssets
  entity.totalBorrowShares = event.params.totalBorrowShares
  entity.totalCollateral = event.params.totalCollateral
  entity.utilizationRate = event.params.utilizationRate
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleUserSupplyShare(event: UserSupplyShareEvent): void {
  let entity = new UserSupplyShare(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  entity.caller = event.params.caller
  entity.supplyShare = event.params.supplyShare
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleSupply(event: SupplyEvent): void {
  let entity = new Supply(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  entity.caller = event.params.caller
  entity.supplyShare = event.params.supplyShare
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  entity.caller = event.params.caller
  entity.supplyShare = event.params.supplyShare
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleAccrueInterest(event: AccrueInterestEvent): void {
  let entity = new AccrueInterest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  entity.prevBorrowRate = event.params.prevBorrowRate
  entity.interest = event.params.interest
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}