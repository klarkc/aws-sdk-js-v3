"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAppliedSchemaArns = void 0;
const CloudDirectory_1 = require("../CloudDirectory");
const CloudDirectoryClient_1 = require("../CloudDirectoryClient");
const ListAppliedSchemaArnsCommand_1 = require("../commands/ListAppliedSchemaArnsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListAppliedSchemaArnsCommand_1.ListAppliedSchemaArnsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listAppliedSchemaArns(input, ...args);
};
async function* paginateListAppliedSchemaArns(config, input, ...additionalArguments) {
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
exports.paginateListAppliedSchemaArns = paginateListAppliedSchemaArns;
//# sourceMappingURL=ListAppliedSchemaArnsPaginator.js.map
