"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStackSetOperations = void 0;
const CloudFormation_1 = require("../CloudFormation");
const CloudFormationClient_1 = require("../CloudFormationClient");
const ListStackSetOperationsCommand_1 = require("../commands/ListStackSetOperationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListStackSetOperationsCommand_1.ListStackSetOperationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listStackSetOperations(input, ...args);
};
async function* paginateListStackSetOperations(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
exports.paginateListStackSetOperations = paginateListStackSetOperations;
//# sourceMappingURL=ListStackSetOperationsPaginator.js.map
