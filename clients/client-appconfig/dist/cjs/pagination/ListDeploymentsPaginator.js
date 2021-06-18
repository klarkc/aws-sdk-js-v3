"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDeployments = void 0;
const AppConfig_1 = require("../AppConfig");
const AppConfigClient_1 = require("../AppConfigClient");
const ListDeploymentsCommand_1 = require("../commands/ListDeploymentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListDeploymentsCommand_1.ListDeploymentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listDeployments(input, ...args);
};
async function* paginateListDeployments(config, input, ...additionalArguments) {
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
exports.paginateListDeployments = paginateListDeployments;
//# sourceMappingURL=ListDeploymentsPaginator.js.map
