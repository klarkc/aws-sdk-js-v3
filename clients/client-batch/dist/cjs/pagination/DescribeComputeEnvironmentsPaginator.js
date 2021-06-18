"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeComputeEnvironments = void 0;
const Batch_1 = require("../Batch");
const BatchClient_1 = require("../BatchClient");
const DescribeComputeEnvironmentsCommand_1 = require("../commands/DescribeComputeEnvironmentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeComputeEnvironmentsCommand_1.DescribeComputeEnvironmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeComputeEnvironments(input, ...args);
};
async function* paginateDescribeComputeEnvironments(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Batch_1.Batch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BatchClient_1.BatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Batch | BatchClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeComputeEnvironments = paginateDescribeComputeEnvironments;
//# sourceMappingURL=DescribeComputeEnvironmentsPaginator.js.map
