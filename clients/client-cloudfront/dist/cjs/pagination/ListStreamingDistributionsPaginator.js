"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStreamingDistributions = void 0;
const CloudFront_1 = require("../CloudFront");
const CloudFrontClient_1 = require("../CloudFrontClient");
const ListStreamingDistributionsCommand_1 = require("../commands/ListStreamingDistributionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListStreamingDistributionsCommand_1.ListStreamingDistributionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listStreamingDistributions(input, ...args);
};
async function* paginateListStreamingDistributions(config, input, ...additionalArguments) {
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
    token = page.StreamingDistributionList.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListStreamingDistributions = paginateListStreamingDistributions;
//# sourceMappingURL=ListStreamingDistributionsPaginator.js.map
