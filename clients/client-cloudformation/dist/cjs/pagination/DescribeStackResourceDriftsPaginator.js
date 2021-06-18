"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeStackResourceDrifts = void 0;
const CloudFormation_1 = require("../CloudFormation");
const CloudFormationClient_1 = require("../CloudFormationClient");
const DescribeStackResourceDriftsCommand_1 = require("../commands/DescribeStackResourceDriftsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeStackResourceDriftsCommand_1.DescribeStackResourceDriftsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeStackResourceDrifts(input, ...args);
};
async function* paginateDescribeStackResourceDrifts(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudFormation_1.CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient_1.CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeStackResourceDrifts = paginateDescribeStackResourceDrifts;
//# sourceMappingURL=DescribeStackResourceDriftsPaginator.js.map
