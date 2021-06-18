"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCloudFrontOriginAccessIdentities = void 0;
const CloudFront_1 = require("../CloudFront");
const CloudFrontClient_1 = require("../CloudFrontClient");
const ListCloudFrontOriginAccessIdentitiesCommand_1 = require("../commands/ListCloudFrontOriginAccessIdentitiesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(
    new ListCloudFrontOriginAccessIdentitiesCommand_1.ListCloudFrontOriginAccessIdentitiesCommand(input),
    ...args
  );
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listCloudFrontOriginAccessIdentities(input, ...args);
};
async function* paginateListCloudFrontOriginAccessIdentities(config, input, ...additionalArguments) {
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
    token = page.CloudFrontOriginAccessIdentityList.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListCloudFrontOriginAccessIdentities = paginateListCloudFrontOriginAccessIdentities;
//# sourceMappingURL=ListCloudFrontOriginAccessIdentitiesPaginator.js.map
