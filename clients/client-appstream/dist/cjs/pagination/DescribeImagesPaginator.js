"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeImages = void 0;
const AppStream_1 = require("../AppStream");
const AppStreamClient_1 = require("../AppStreamClient");
const DescribeImagesCommand_1 = require("../commands/DescribeImagesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeImagesCommand_1.DescribeImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeImages(input, ...args);
};
async function* paginateDescribeImages(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppStream_1.AppStream) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppStreamClient_1.AppStreamClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppStream | AppStreamClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeImages = paginateDescribeImages;
//# sourceMappingURL=DescribeImagesPaginator.js.map
