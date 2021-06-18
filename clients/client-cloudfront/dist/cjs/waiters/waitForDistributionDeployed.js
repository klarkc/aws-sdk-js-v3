"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilDistributionDeployed = exports.waitForDistributionDeployed = void 0;
const GetDistributionCommand_1 = require("../commands/GetDistributionCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new GetDistributionCommand_1.GetDistributionCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.Distribution.Status;
      };
      if (returnComparator() === "Deployed") {
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until a distribution is deployed.
 *  @deprecated Use waitUntilDistributionDeployed instead. waitForDistributionDeployed does not throw error in non-success cases.
 */
const waitForDistributionDeployed = async (params, input) => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForDistributionDeployed = waitForDistributionDeployed;
/**
 * Wait until a distribution is deployed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDistributionCommand for polling.
 */
const waitUntilDistributionDeployed = async (params, input) => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilDistributionDeployed = waitUntilDistributionDeployed;
//# sourceMappingURL=waitForDistributionDeployed.js.map
