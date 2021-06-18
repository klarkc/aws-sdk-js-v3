"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDistributions = void 0;
const CloudFront_1 = require("../CloudFront");
const CloudFrontClient_1 = require("../CloudFrontClient");
const ListDistributionsCommand_1 = require("../commands/ListDistributionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListDistributionsCommand_1.ListDistributionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listDistributions(input, ...args);
};
async function* paginateListDistributions(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof CloudFront_1.CloudFront) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFrontClient_1.CloudFrontClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFront | CloudFrontClient");
    }
    yield page;
    token = page.DistributionList.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListDistributions = paginateListDistributions;
//# sourceMappingURL=ListDistributionsPaginator.js.map
