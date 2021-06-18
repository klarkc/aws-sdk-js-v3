"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTags = void 0;
const CloudHSMV2_1 = require("../CloudHSMV2");
const CloudHSMV2Client_1 = require("../CloudHSMV2Client");
const ListTagsCommand_1 = require("../commands/ListTagsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListTagsCommand_1.ListTagsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listTags(input, ...args);
};
async function* paginateListTags(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudHSMV2_1.CloudHSMV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudHSMV2Client_1.CloudHSMV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudHSMV2 | CloudHSMV2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListTags = paginateListTags;
//# sourceMappingURL=ListTagsPaginator.js.map
