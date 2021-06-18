"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEnvironments = void 0;
const Cloud9_1 = require("../Cloud9");
const Cloud9Client_1 = require("../Cloud9Client");
const ListEnvironmentsCommand_1 = require("../commands/ListEnvironmentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListEnvironmentsCommand_1.ListEnvironmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listEnvironments(input, ...args);
};
async function* paginateListEnvironments(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Cloud9_1.Cloud9) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Cloud9Client_1.Cloud9Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Cloud9 | Cloud9Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListEnvironments = paginateListEnvironments;
//# sourceMappingURL=ListEnvironmentsPaginator.js.map
