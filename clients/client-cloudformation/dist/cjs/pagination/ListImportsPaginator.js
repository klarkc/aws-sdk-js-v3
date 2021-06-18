"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListImports = void 0;
const CloudFormation_1 = require("../CloudFormation");
const CloudFormationClient_1 = require("../CloudFormationClient");
const ListImportsCommand_1 = require("../commands/ListImportsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListImportsCommand_1.ListImportsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listImports(input, ...args);
};
async function* paginateListImports(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudFormation_1.CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient_1.CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListImports = paginateListImports;
//# sourceMappingURL=ListImportsPaginator.js.map
