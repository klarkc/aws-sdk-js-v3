"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListWorkspaces = void 0;
const Amp_1 = require("../Amp");
const AmpClient_1 = require("../AmpClient");
const ListWorkspacesCommand_1 = require("../commands/ListWorkspacesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListWorkspacesCommand_1.ListWorkspacesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listWorkspaces(input, ...args);
};
async function* paginateListWorkspaces(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Amp_1.Amp) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AmpClient_1.AmpClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Amp | AmpClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListWorkspaces = paginateListWorkspaces;
//# sourceMappingURL=ListWorkspacesPaginator.js.map
