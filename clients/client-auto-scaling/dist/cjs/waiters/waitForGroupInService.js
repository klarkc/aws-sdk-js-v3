"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilGroupInService = exports.waitForGroupInService = void 0;
const DescribeAutoScalingGroupsCommand_1 = require("../commands/DescribeAutoScalingGroupsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new DescribeAutoScalingGroupsCommand_1.DescribeAutoScalingGroupsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1 = [].concat(...result.AutoScalingGroups);
        let projection_3 = flat_1.map((element_2) => {
          let filterRes_5 = element_2.Instances.filter((element_4) => {
            return element_4.LifecycleState == "InService";
          });
          let result_6 = [];
          result_6.push(filterRes_5.length >= element_2.MinSize);
          element_2 = result_6;
          return element_2;
        });
        let flat_7 = [].concat(...projection_3);
        return flat_7.includes(false);
      };
      if (returnComparator() == false) {
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1 = [].concat(...result.AutoScalingGroups);
        let projection_3 = flat_1.map((element_2) => {
          let filterRes_5 = element_2.Instances.filter((element_4) => {
            return element_4.LifecycleState == "InService";
          });
          let result_6 = [];
          result_6.push(filterRes_5.length >= element_2.MinSize);
          element_2 = result_6;
          return element_2;
        });
        let flat_7 = [].concat(...projection_3);
        return flat_7.includes(false);
      };
      if (returnComparator() == true) {
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
 *  @deprecated Use waitUntilGroupInService instead. waitForGroupInService does not throw error in non-success cases.
 */
const waitForGroupInService = async (params, input) => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForGroupInService = waitForGroupInService;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
const waitUntilGroupInService = async (params, input) => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilGroupInService = waitUntilGroupInService;
//# sourceMappingURL=waitForGroupInService.js.map
