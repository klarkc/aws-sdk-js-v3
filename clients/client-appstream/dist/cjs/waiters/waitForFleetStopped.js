"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFleetStopped = exports.waitForFleetStopped = void 0;
const DescribeFleetsCommand_1 = require("../commands/DescribeFleetsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new DescribeFleetsCommand_1.DescribeFleetsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1 = [].concat(...result.Fleets);
        let projection_3 = flat_1.map((element_2) => {
          return element_2.State;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "INACTIVE";
      }
      if (allStringEq_5) {
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1 = [].concat(...result.Fleets);
        let projection_3 = flat_1.map((element_2) => {
          return element_2.State;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "PENDING_ACTIVATE") {
          return { state: util_waiter_1.WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1 = [].concat(...result.Fleets);
        let projection_3 = flat_1.map((element_2) => {
          return element_2.State;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "ACTIVE") {
          return { state: util_waiter_1.WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilFleetStopped instead. waitForFleetStopped does not throw error in non-success cases.
 */
const waitForFleetStopped = async (params, input) => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFleetStopped = waitForFleetStopped;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFleetsCommand for polling.
 */
const waitUntilFleetStopped = async (params, input) => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilFleetStopped = waitUntilFleetStopped;
//# sourceMappingURL=waitForFleetStopped.js.map
