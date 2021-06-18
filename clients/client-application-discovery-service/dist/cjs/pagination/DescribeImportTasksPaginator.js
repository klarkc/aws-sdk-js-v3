"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeImportTasks = void 0;
const ApplicationDiscoveryService_1 = require("../ApplicationDiscoveryService");
const ApplicationDiscoveryServiceClient_1 = require("../ApplicationDiscoveryServiceClient");
const DescribeImportTasksCommand_1 = require("../commands/DescribeImportTasksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeImportTasksCommand_1.DescribeImportTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeImportTasks(input, ...args);
};
async function* paginateDescribeImportTasks(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ApplicationDiscoveryService_1.ApplicationDiscoveryService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationDiscoveryServiceClient_1.ApplicationDiscoveryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationDiscoveryService | ApplicationDiscoveryServiceClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeImportTasks = paginateDescribeImportTasks;
//# sourceMappingURL=DescribeImportTasksPaginator.js.map
