import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts";
import {
  Borrow as BorrowEvent,
  SupplyCollateral as SupplyCollateralEvent,
  UserPosition as UserPositionEvent,
  WithdrawCollateral as WithdrawCollateralEvent,
} from "../generated/templates/Position/Position";
import {
  Borrow,
  SupplyCollateral,
  UserPosition,
  WithdrawCollateral,
  Position,
} from "../generated/schema";

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

  let positionId = event.params.onBehalf.toHex();
  let position = Position.load(positionId);
  if (position == null) {
    position = new Position(positionId);
  }
  position.lendingPool = event.params.lendingPool;
  position.caller = event.params.caller;
  position.onBehalf = event.params.onBehalf;
  position.baseCollateral = event.params.baseCollateral;
  position.effectiveCollateral = event.params.effectiveCollateral;
  position.borrowShares = event.params.borrowShares;
  position.leverage = event.params.leverage;
  position.liquidationPrice = event.params.liquidationPrice;
  position.health = event.params.health;
  position.ltv = event.params.ltv;
  position.blockNumber = event.block.number;
  position.blockTimestamp = event.block.timestamp;
  position.transactionHash = event.transaction.hash;
  position.save();
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