import { ethereum, Bytes } from "@graphprotocol/graph-ts";
import {
  AllLendingPool as AllLendingPoolEvent,
  CreateLendingPool as CreateLendingPoolEvent,
  StoreLendingPool as StoreLendingPoolEvent,
  DiscardLendingPool as DiscardLendingPoolEvent
} from "../generated/LendingPoolFactory/LendingPoolFactory"
import {
  AllLendingPool,
  CreateLendingPool,
  StoreLendingPool,
  DiscardLendingPool
} from "../generated/schema"
import { LendingPool as LendingPoolTemplate } from "../generated/templates";

export function handleAllLendingPool(event: AllLendingPoolEvent): void {
  let entity = new AllLendingPool(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  entity.loanToken = event.params.loanToken
  entity.collateralToken = event.params.collateralToken
  entity.loanTokenUsdDataFeed = event.params.loanTokenUsdDataFeed
  entity.collateralTokenUsdDataFeed = event.params.collateralTokenUsdDataFeed
  entity.loanTokenName = event.params.loanTokenName
  entity.collateralTokenName = event.params.collateralTokenName
  entity.loanTokenSymbol = event.params.loanTokenSymbol
  entity.collateralTokenSymbol = event.params.collateralTokenSymbol
  entity.creator = event.params.creator
  entity.isActive = event.params.isActive
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleCreateLendingPool(event: CreateLendingPoolEvent): void {
  let entity = new CreateLendingPool(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  // Encode the struct as bytes before storing it
  let encodedPoolParams = ethereum.encode(
    ethereum.Value.fromTuple(event.params.poolParams)
  );

  if (encodedPoolParams) {
    entity.poolParams = encodedPoolParams as Bytes;
  } else {
    // Handle the case where encoding fails
    entity.poolParams = Bytes.empty();
  }

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
  LendingPoolTemplate.create(event.params.lendingPool)
}

export function handleStoreLendingPool(event: StoreLendingPoolEvent): void {
  let entity = new StoreLendingPool(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  // Encode the struct as bytes before storing it
  let encodedPoolParams = ethereum.encode(
    ethereum.Value.fromTuple(event.params.poolParams)
  );

  if (encodedPoolParams) {
    entity.poolParams = encodedPoolParams as Bytes;
  } else {
    // Handle the case where encoding fails
    entity.poolParams = Bytes.empty();
  }

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleDiscardLendingPool(event: DiscardLendingPoolEvent): void {
  let entity = new DiscardLendingPool(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lendingPool = event.params.lendingPool
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}
