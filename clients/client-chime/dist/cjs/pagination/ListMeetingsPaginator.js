"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListMeetings = void 0;
const Chime_1 = require("../Chime");
const ChimeClient_1 = require("../ChimeClient");
const ListMeetingsCommand_1 = require("../commands/ListMeetingsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListMeetingsCommand_1.ListMeetingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listMeetings(input, ...args);
};
async function* paginateListMeetings(config, input, ...additionalArguments) {
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
exports.paginateListMeetings = paginateListMeetings;
//# sourceMappingURL=ListMeetingsPaginator.js.map
