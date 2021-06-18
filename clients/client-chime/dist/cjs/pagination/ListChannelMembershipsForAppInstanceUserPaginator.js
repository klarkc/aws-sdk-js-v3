"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListChannelMembershipsForAppInstanceUser = void 0;
const Chime_1 = require("../Chime");
const ChimeClient_1 = require("../ChimeClient");
const ListChannelMembershipsForAppInstanceUserCommand_1 = require("../commands/ListChannelMembershipsForAppInstanceUserCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(
    new ListChannelMembershipsForAppInstanceUserCommand_1.ListChannelMembershipsForAppInstanceUserCommand(input),
    ...args
  );
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listChannelMembershipsForAppInstanceUser(input, ...args);
};
async function* paginateListChannelMembershipsForAppInstanceUser(config, input, ...additionalArguments) {
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
exports.paginateListChannelMembershipsForAppInstanceUser = paginateListChannelMembershipsForAppInstanceUser;
//# sourceMappingURL=ListChannelMembershipsForAppInstanceUserPaginator.js.map
