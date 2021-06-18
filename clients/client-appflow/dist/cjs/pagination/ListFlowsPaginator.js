"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFlows = void 0;
const Appflow_1 = require("../Appflow");
const AppflowClient_1 = require("../AppflowClient");
const ListFlowsCommand_1 = require("../commands/ListFlowsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListFlowsCommand_1.ListFlowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listFlows(input, ...args);
};
async function* paginateListFlows(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Appflow_1.Appflow) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppflowClient_1.AppflowClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Appflow | AppflowClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListFlows = paginateListFlows;
//# sourceMappingURL=ListFlowsPaginator.js.map
