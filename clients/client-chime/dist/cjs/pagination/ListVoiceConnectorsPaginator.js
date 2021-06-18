"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListVoiceConnectors = void 0;
const Chime_1 = require("../Chime");
const ChimeClient_1 = require("../ChimeClient");
const ListVoiceConnectorsCommand_1 = require("../commands/ListVoiceConnectorsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListVoiceConnectorsCommand_1.ListVoiceConnectorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listVoiceConnectors(input, ...args);
};
async function* paginateListVoiceConnectors(config, input, ...additionalArguments) {
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
exports.paginateListVoiceConnectors = paginateListVoiceConnectors;
//# sourceMappingURL=ListVoiceConnectorsPaginator.js.map
