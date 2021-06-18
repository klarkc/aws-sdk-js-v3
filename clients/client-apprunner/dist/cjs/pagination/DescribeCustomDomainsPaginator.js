"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeCustomDomains = void 0;
const AppRunner_1 = require("../AppRunner");
const AppRunnerClient_1 = require("../AppRunnerClient");
const DescribeCustomDomainsCommand_1 = require("../commands/DescribeCustomDomainsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeCustomDomainsCommand_1.DescribeCustomDomainsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeCustomDomains(input, ...args);
};
async function* paginateDescribeCustomDomains(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppRunner_1.AppRunner) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppRunnerClient_1.AppRunnerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppRunner | AppRunnerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeCustomDomains = paginateDescribeCustomDomains;
//# sourceMappingURL=DescribeCustomDomainsPaginator.js.map
