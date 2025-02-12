export function saveBlockDetail(entity: any, event: any) {
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  return entity
}