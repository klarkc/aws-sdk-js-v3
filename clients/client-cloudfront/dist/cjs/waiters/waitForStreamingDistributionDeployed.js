"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilStreamingDistributionDeployed = exports.waitForStreamingDistributionDeployed = void 0;
const GetStreamingDistributionCommand_1 = require("../commands/GetStreamingDistributionCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new GetStreamingDistributionCommand_1.GetStreamingDistributionCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.StreamingDistribution.Status;
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
 * Wait until a streaming distribution is deployed.
 *  @deprecated Use waitUntilStreamingDistributionDeployed instead. waitForStreamingDistributionDeployed does not throw error in non-success cases.
 */
const waitForStreamingDistributionDeployed = async (params, input) => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForStreamingDistributionDeployed = waitForStreamingDistributionDeployed;
/**
 * Wait until a streaming distribution is deployed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamingDistributionCommand for polling.
 */
const waitUntilStreamingDistributionDeployed = async (params, input) => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilStreamingDistributionDeployed = waitUntilStreamingDistributionDeployed;
//# sourceMappingURL=waitForStreamingDistributionDeployed.js.map
