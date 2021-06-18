"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateValidatePolicy = void 0;
const AccessAnalyzer_1 = require("../AccessAnalyzer");
const AccessAnalyzerClient_1 = require("../AccessAnalyzerClient");
const ValidatePolicyCommand_1 = require("../commands/ValidatePolicyCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ValidatePolicyCommand_1.ValidatePolicyCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.validatePolicy(input, ...args);
};
async function* paginateValidatePolicy(config, input, ...additionalArguments) {
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
exports.paginateValidatePolicy = paginateValidatePolicy;
//# sourceMappingURL=ValidatePolicyPaginator.js.map
