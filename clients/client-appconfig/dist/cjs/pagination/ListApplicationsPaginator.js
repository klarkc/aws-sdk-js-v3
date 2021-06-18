"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListApplications = void 0;
const AppConfig_1 = require("../AppConfig");
const AppConfigClient_1 = require("../AppConfigClient");
const ListApplicationsCommand_1 = require("../commands/ListApplicationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListApplicationsCommand_1.ListApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listApplications(input, ...args);
};
async function* paginateListApplications(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppConfig_1.AppConfig) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppConfigClient_1.AppConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppConfig | AppConfigClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListApplications = paginateListApplications;
//# sourceMappingURL=ListApplicationsPaginator.js.map
