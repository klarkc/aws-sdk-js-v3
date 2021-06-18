"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListVirtualRouters = void 0;
const AppMesh_1 = require("../AppMesh");
const AppMeshClient_1 = require("../AppMeshClient");
const ListVirtualRoutersCommand_1 = require("../commands/ListVirtualRoutersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListVirtualRoutersCommand_1.ListVirtualRoutersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listVirtualRouters(input, ...args);
};
async function* paginateListVirtualRouters(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof AppMesh_1.AppMesh) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppMeshClient_1.AppMeshClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppMesh | AppMeshClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListVirtualRouters = paginateListVirtualRouters;
//# sourceMappingURL=ListVirtualRoutersPaginator.js.map
