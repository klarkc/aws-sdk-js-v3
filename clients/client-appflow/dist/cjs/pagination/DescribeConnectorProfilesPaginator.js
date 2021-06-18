"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeConnectorProfiles = void 0;
const Appflow_1 = require("../Appflow");
const AppflowClient_1 = require("../AppflowClient");
const DescribeConnectorProfilesCommand_1 = require("../commands/DescribeConnectorProfilesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeConnectorProfilesCommand_1.DescribeConnectorProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeConnectorProfiles(input, ...args);
};
async function* paginateDescribeConnectorProfiles(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Appflow_1.Appflow) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppflowClient_1.AppflowClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Appflow | AppflowClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeConnectorProfiles = paginateDescribeConnectorProfiles;
//# sourceMappingURL=DescribeConnectorProfilesPaginator.js.map
