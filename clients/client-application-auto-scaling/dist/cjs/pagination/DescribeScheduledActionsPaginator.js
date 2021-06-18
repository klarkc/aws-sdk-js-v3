"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeScheduledActions = void 0;
const ApplicationAutoScaling_1 = require("../ApplicationAutoScaling");
const ApplicationAutoScalingClient_1 = require("../ApplicationAutoScalingClient");
const DescribeScheduledActionsCommand_1 = require("../commands/DescribeScheduledActionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeScheduledActionsCommand_1.DescribeScheduledActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeScheduledActions(input, ...args);
};
async function* paginateDescribeScheduledActions(config, input, ...additionalArguments) {
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
exports.paginateDescribeScheduledActions = paginateDescribeScheduledActions;
//# sourceMappingURL=DescribeScheduledActionsPaginator.js.map
