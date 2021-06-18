"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTypedLinkFacetNames = void 0;
const CloudDirectory_1 = require("../CloudDirectory");
const CloudDirectoryClient_1 = require("../CloudDirectoryClient");
const ListTypedLinkFacetNamesCommand_1 = require("../commands/ListTypedLinkFacetNamesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListTypedLinkFacetNamesCommand_1.ListTypedLinkFacetNamesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listTypedLinkFacetNames(input, ...args);
};
async function* paginateListTypedLinkFacetNames(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory_1.CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient_1.CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListTypedLinkFacetNames = paginateListTypedLinkFacetNames;
//# sourceMappingURL=ListTypedLinkFacetNamesPaginator.js.map
