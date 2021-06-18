"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeScalableTargets = void 0;
const ApplicationAutoScaling_1 = require("../ApplicationAutoScaling");
const ApplicationAutoScalingClient_1 = require("../ApplicationAutoScalingClient");
const DescribeScalableTargetsCommand_1 = require("../commands/DescribeScalableTargetsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeScalableTargetsCommand_1.DescribeScalableTargetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeScalableTargets(input, ...args);
};
async function* paginateDescribeScalableTargets(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationAutoScaling_1.ApplicationAutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationAutoScalingClient_1.ApplicationAutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationAutoScaling | ApplicationAutoScalingClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeScalableTargets = paginateDescribeScalableTargets;
//# sourceMappingURL=DescribeScalableTargetsPaginator.js.map
