"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilInvalidationCompleted = exports.waitForInvalidationCompleted = void 0;
const GetInvalidationCommand_1 = require("../commands/GetInvalidationCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new GetInvalidationCommand_1.GetInvalidationCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.Invalidation.Status;
      };
      if (returnComparator() === "Completed") {
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until an invalidation has completed.
 *  @deprecated Use waitUntilInvalidationCompleted instead. waitForInvalidationCompleted does not throw error in non-success cases.
 */
const waitForInvalidationCompleted = async (params, input) => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForInvalidationCompleted = waitForInvalidationCompleted;
/**
 * Wait until an invalidation has completed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInvalidationCommand for polling.
 */
const waitUntilInvalidationCompleted = async (params, input) => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilInvalidationCompleted = waitUntilInvalidationCompleted;
//# sourceMappingURL=waitForInvalidationCompleted.js.map
