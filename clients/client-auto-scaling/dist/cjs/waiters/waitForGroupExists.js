"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilGroupExists = exports.waitForGroupExists = void 0;
const DescribeAutoScalingGroupsCommand_1 = require("../commands/DescribeAutoScalingGroupsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new DescribeAutoScalingGroupsCommand_1.DescribeAutoScalingGroupsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.AutoScalingGroups.length > 0.0;
      };
      if (returnComparator() == true) {
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.AutoScalingGroups.length > 0.0;
      };
      if (returnComparator() == false) {
        return { state: util_waiter_1.WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilGroupExists instead. waitForGroupExists does not throw error in non-success cases.
 */
const waitForGroupExists = async (params, input) => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForGroupExists = waitForGroupExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
const waitUntilGroupExists = async (params, input) => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilGroupExists = waitUntilGroupExists;
//# sourceMappingURL=waitForGroupExists.js.map
