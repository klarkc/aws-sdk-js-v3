"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListHostedConfigurationVersions = void 0;
const AppConfig_1 = require("../AppConfig");
const AppConfigClient_1 = require("../AppConfigClient");
const ListHostedConfigurationVersionsCommand_1 = require("../commands/ListHostedConfigurationVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(
    new ListHostedConfigurationVersionsCommand_1.ListHostedConfigurationVersionsCommand(input),
    ...args
  );
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listHostedConfigurationVersions(input, ...args);
};
async function* paginateListHostedConfigurationVersions(config, input, ...additionalArguments) {
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
exports.paginateListHostedConfigurationVersions = paginateListHostedConfigurationVersions;
//# sourceMappingURL=ListHostedConfigurationVersionsPaginator.js.map
