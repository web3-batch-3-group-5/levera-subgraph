import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts";
import {
  Borrow as BorrowEvent,
  Repay as RepayEvent,
  SupplyCollateral as SupplyCollateralEvent,
  UserPosition as UserPositionEvent,
  WithdrawCollateral as WithdrawCollateralEvent,
} from "../generated/templates/Position/Position";
import {
  Borrow,
  Repay,
  SupplyCollateral,
  UserPosition,
  WithdrawCollateral,
} from "../generated/schema";

export function handleUserPosition(event: UserPositionEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let entity = new UserPosition(id);

  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;
  entity.baseCollateral = event.params.baseCollateral;
  entity.effectiveCollateral = event.params.effectiveCollateral;
  entity.borrowShares = event.params.borrowShares;
  entity.leverage = event.params.leverage;
  entity.liquidationPrice = event.params.liquidationPrice;
  entity.health = event.params.health;
  entity.ltv = event.params.ltv;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleBorrow(event: BorrowEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let entity = new Borrow(id);

  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;
  entity.baseCollateral = event.params.baseCollateral;
  entity.effectiveCollateral = event.params.effectiveCollateral;
  entity.borrowShares = event.params.borrowShares;
  entity.leverage = event.params.leverage;
  entity.liquidationPrice = event.params.liquidationPrice;
  entity.health = event.params.health;
  entity.ltv = event.params.ltv;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleRepay(event: RepayEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let entity = new Repay(id);

  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;
  entity.baseCollateral = event.params.baseCollateral;
  entity.effectiveCollateral = event.params.effectiveCollateral;
  entity.borrowShares = event.params.borrowShares;
  entity.leverage = event.params.leverage;
  entity.liquidationPrice = event.params.liquidationPrice;
  entity.health = event.params.health;
  entity.ltv = event.params.ltv;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleSupplyCollateral(event: SupplyCollateralEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let entity = new SupplyCollateral(id);

  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;
  entity.baseCollateral = event.params.baseCollateral;
  entity.effectiveCollateral = event.params.effectiveCollateral;
  entity.borrowShares = event.params.borrowShares;
  entity.leverage = event.params.leverage;
  entity.liquidationPrice = event.params.liquidationPrice;
  entity.health = event.params.health;
  entity.ltv = event.params.ltv;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleWithdrawCollateral(event: WithdrawCollateralEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let entity = new WithdrawCollateral(id);

  entity.lendingPool = event.params.lendingPool;
  entity.caller = event.params.caller;
  entity.onBehalf = event.params.onBehalf;
  entity.baseCollateral = event.params.baseCollateral;
  entity.effectiveCollateral = event.params.effectiveCollateral;
  entity.borrowShares = event.params.borrowShares;
  entity.leverage = event.params.leverage;
  entity.liquidationPrice = event.params.liquidationPrice;
  entity.health = event.params.health;
  entity.ltv = event.params.ltv;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}