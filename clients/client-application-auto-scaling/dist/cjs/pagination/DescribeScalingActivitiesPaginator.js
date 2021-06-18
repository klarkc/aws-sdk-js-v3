"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeScalingActivities = void 0;
const ApplicationAutoScaling_1 = require("../ApplicationAutoScaling");
const ApplicationAutoScalingClient_1 = require("../ApplicationAutoScalingClient");
const DescribeScalingActivitiesCommand_1 = require("../commands/DescribeScalingActivitiesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeScalingActivitiesCommand_1.DescribeScalingActivitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeScalingActivities(input, ...args);
};
async function* paginateDescribeScalingActivities(config, input, ...additionalArguments) {
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
exports.paginateDescribeScalingActivities = paginateDescribeScalingActivities;
//# sourceMappingURL=DescribeScalingActivitiesPaginator.js.map
