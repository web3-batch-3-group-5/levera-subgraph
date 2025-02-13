import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts";
import {
  UserSupplyShare as UserSupplyShareEvent,
  UserPosition as UserPositionEvent,
  Supply as SupplyEvent,
  Withdraw as WithdrawEvent,
  AccrueInterest as AccrueInterestEvent,
  BorrowByPosition as BorrowByPositionEvent,
  RepayByPosition as RepayByPositionEvent,
  SupplyCollateralByPosition as SupplyCollateralByPositionEvent,
  WithdrawCollateralByPosition as WithdrawCollateralByPositionEvent
} from "../generated/templates/LendingPool/LendingPool"
import {
  UserSupplyShare,
  UserPosition,
  Supply,
  Withdraw,
  AccrueInterest,
  BorrowByPosition,
  RepayByPosition,
  SupplyCollateralByPosition,
  WithdrawCollateralByPosition
} from "../generated/schema"

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

export function handleUserPosition(event: UserPositionEvent): void {
  let entity = new UserPosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  entity.caller = event.params.caller
  entity.onBehalf = event.params.onBehalf
  entity.collateralAmount = event.params.collateralAmount
  entity.borrowShares = event.params.borrowShares
  entity.timestamp = event.params.timestamp
  entity.isActive = event.params.isActive
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

export function handleBorrowByPosition(event: BorrowByPositionEvent): void {
  let entity = new BorrowByPosition(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;

  let encodedPosition = ethereum.encode(
    ethereum.Value.fromTuple(event.params.position)
  );

  entity.position = encodedPosition ? (encodedPosition as Bytes) : Bytes.empty();
  
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleRepayByPosition(event: RepayByPositionEvent): void {
  let entity = new RepayByPosition(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;

  let encodedPosition = ethereum.encode(
    ethereum.Value.fromTuple(event.params.position)
  );

  entity.position = encodedPosition ? (encodedPosition as Bytes) : Bytes.empty();
  
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleSupplyCollateralByPosition(event: SupplyCollateralByPositionEvent): void {
  let entity = new SupplyCollateralByPosition(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;

  let encodedPosition = ethereum.encode(
    ethereum.Value.fromTuple(event.params.position)
  );

  entity.position = encodedPosition ? (encodedPosition as Bytes) : Bytes.empty();
  
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleWithdrawCollateralByPosition(event: WithdrawCollateralByPositionEvent): void {
  let entity = new WithdrawCollateralByPosition(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;

  let encodedPosition = ethereum.encode(
    ethereum.Value.fromTuple(event.params.position)
  );

  entity.position = encodedPosition ? (encodedPosition as Bytes) : Bytes.empty();
  
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}
