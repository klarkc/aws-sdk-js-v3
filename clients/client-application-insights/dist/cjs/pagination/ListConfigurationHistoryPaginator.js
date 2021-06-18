"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListConfigurationHistory = void 0;
const ApplicationInsights_1 = require("../ApplicationInsights");
const ApplicationInsightsClient_1 = require("../ApplicationInsightsClient");
const ListConfigurationHistoryCommand_1 = require("../commands/ListConfigurationHistoryCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListConfigurationHistoryCommand_1.ListConfigurationHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listConfigurationHistory(input, ...args);
};
async function* paginateListConfigurationHistory(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationInsights_1.ApplicationInsights) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationInsightsClient_1.ApplicationInsightsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationInsights | ApplicationInsightsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListConfigurationHistory = paginateListConfigurationHistory;
//# sourceMappingURL=ListConfigurationHistoryPaginator.js.map
