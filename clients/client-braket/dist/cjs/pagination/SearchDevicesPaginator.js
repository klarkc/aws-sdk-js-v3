"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateSearchDevices = void 0;
const Braket_1 = require("../Braket");
const BraketClient_1 = require("../BraketClient");
const SearchDevicesCommand_1 = require("../commands/SearchDevicesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new SearchDevicesCommand_1.SearchDevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.searchDevices(input, ...args);
};
async function* paginateSearchDevices(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Braket_1.Braket) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BraketClient_1.BraketClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Braket | BraketClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateSearchDevices = paginateSearchDevices;
//# sourceMappingURL=SearchDevicesPaginator.js.map
