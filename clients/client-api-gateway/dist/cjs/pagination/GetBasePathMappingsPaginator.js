"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetBasePathMappings = void 0;
const APIGateway_1 = require("../APIGateway");
const APIGatewayClient_1 = require("../APIGatewayClient");
const GetBasePathMappingsCommand_1 = require("../commands/GetBasePathMappingsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new GetBasePathMappingsCommand_1.GetBasePathMappingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.getBasePathMappings(input, ...args);
};
async function* paginateGetBasePathMappings(config, input, ...additionalArguments) {
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
exports.paginateGetBasePathMappings = paginateGetBasePathMappings;
//# sourceMappingURL=GetBasePathMappingsPaginator.js.map
