"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPolicyGenerations = void 0;
const AccessAnalyzer_1 = require("../AccessAnalyzer");
const AccessAnalyzerClient_1 = require("../AccessAnalyzerClient");
const ListPolicyGenerationsCommand_1 = require("../commands/ListPolicyGenerationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListPolicyGenerationsCommand_1.ListPolicyGenerationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listPolicyGenerations(input, ...args);
};
async function* paginateListPolicyGenerations(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzer_1.AccessAnalyzer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AccessAnalyzerClient_1.AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListPolicyGenerations = paginateListPolicyGenerations;
//# sourceMappingURL=ListPolicyGenerationsPaginator.js.map
