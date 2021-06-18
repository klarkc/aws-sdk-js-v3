"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeScheduledActions = void 0;
const AutoScaling_1 = require("../AutoScaling");
const AutoScalingClient_1 = require("../AutoScalingClient");
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
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScaling_1.AutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AutoScalingClient_1.AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
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
