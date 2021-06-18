"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilTypeRegistrationComplete = exports.waitForTypeRegistrationComplete = void 0;
const DescribeTypeRegistrationCommand_1 = require("../commands/DescribeTypeRegistrationCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new DescribeTypeRegistrationCommand_1.DescribeTypeRegistrationCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.ProgressStatus;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.ProgressStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: util_waiter_1.WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until type registration is COMPLETE.
 *  @deprecated Use waitUntilTypeRegistrationComplete instead. waitForTypeRegistrationComplete does not throw error in non-success cases.
 */
const waitForTypeRegistrationComplete = async (params, input) => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForTypeRegistrationComplete = waitForTypeRegistrationComplete;
/**
 * Wait until type registration is COMPLETE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTypeRegistrationCommand for polling.
 */
const waitUntilTypeRegistrationComplete = async (params, input) => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilTypeRegistrationComplete = waitUntilTypeRegistrationComplete;
//# sourceMappingURL=waitForTypeRegistrationComplete.js.map
