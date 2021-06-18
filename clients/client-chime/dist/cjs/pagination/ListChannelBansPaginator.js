"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListChannelBans = void 0;
const Chime_1 = require("../Chime");
const ChimeClient_1 = require("../ChimeClient");
const ListChannelBansCommand_1 = require("../commands/ListChannelBansCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListChannelBansCommand_1.ListChannelBansCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listChannelBans(input, ...args);
};
async function* paginateListChannelBans(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime_1.Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient_1.ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListChannelBans = paginateListChannelBans;
//# sourceMappingURL=ListChannelBansPaginator.js.map
