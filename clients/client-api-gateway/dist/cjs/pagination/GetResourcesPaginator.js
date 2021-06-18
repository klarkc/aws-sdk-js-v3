"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetResources = void 0;
const APIGateway_1 = require("../APIGateway");
const APIGatewayClient_1 = require("../APIGatewayClient");
const GetResourcesCommand_1 = require("../commands/GetResourcesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new GetResourcesCommand_1.GetResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.getResources(input, ...args);
};
async function* paginateGetResources(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.position
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.position = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof APIGateway_1.APIGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof APIGatewayClient_1.APIGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected APIGateway | APIGatewayClient");
    }
    yield page;
    token = page.position;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateGetResources = paginateGetResources;
//# sourceMappingURL=GetResourcesPaginator.js.map
