"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetUsagePlanKeys = void 0;
const APIGateway_1 = require("../APIGateway");
const APIGatewayClient_1 = require("../APIGatewayClient");
const GetUsagePlanKeysCommand_1 = require("../commands/GetUsagePlanKeysCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new GetUsagePlanKeysCommand_1.GetUsagePlanKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.getUsagePlanKeys(input, ...args);
};
async function* paginateGetUsagePlanKeys(config, input, ...additionalArguments) {
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
exports.paginateGetUsagePlanKeys = paginateGetUsagePlanKeys;
//# sourceMappingURL=GetUsagePlanKeysPaginator.js.map
