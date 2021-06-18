"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListReportDefinitions = void 0;
const ApplicationCostProfiler_1 = require("../ApplicationCostProfiler");
const ApplicationCostProfilerClient_1 = require("../ApplicationCostProfilerClient");
const ListReportDefinitionsCommand_1 = require("../commands/ListReportDefinitionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListReportDefinitionsCommand_1.ListReportDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listReportDefinitions(input, ...args);
};
async function* paginateListReportDefinitions(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ApplicationCostProfiler_1.ApplicationCostProfiler) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationCostProfilerClient_1.ApplicationCostProfilerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationCostProfiler | ApplicationCostProfilerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListReportDefinitions = paginateListReportDefinitions;
//# sourceMappingURL=ListReportDefinitionsPaginator.js.map
