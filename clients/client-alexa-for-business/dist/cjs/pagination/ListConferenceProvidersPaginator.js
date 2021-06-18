"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListConferenceProviders = void 0;
const AlexaForBusiness_1 = require("../AlexaForBusiness");
const AlexaForBusinessClient_1 = require("../AlexaForBusinessClient");
const ListConferenceProvidersCommand_1 = require("../commands/ListConferenceProvidersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListConferenceProvidersCommand_1.ListConferenceProvidersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listConferenceProviders(input, ...args);
};
async function* paginateListConferenceProviders(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness_1.AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient_1.AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListConferenceProviders = paginateListConferenceProviders;
//# sourceMappingURL=ListConferenceProvidersPaginator.js.map
