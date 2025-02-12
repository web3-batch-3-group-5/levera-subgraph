import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { UserPosition } from "../generated/schema"
import { handleUserPosition } from "../src/lending-pool"
import { createUserPositionEvent } from "./lending-pool-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let caller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let onBehalf = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let collateralAmount = BigInt.fromI32(234)
    let borrowShares = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let isActive = false
    let newUserPositionEvent = createUserPositionEvent(
      caller,
      onBehalf,
      collateralAmount,
      borrowShares,
      timestamp,
      isActive
    )
    handleUserPosition(newUserPositionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("UserPosition created and stored", () => {
    assert.entityCount("UserPosition", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "UserPosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "UserPosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "onBehalf",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "UserPosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collateralAmount",
      "234"
    )
    assert.fieldEquals(
      "UserPosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowShares",
      "234"
    )
    assert.fieldEquals(
      "UserPosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )
    assert.fieldEquals(
      "UserPosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isActive",
      "false"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
