"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeJobQueues = void 0;
const Batch_1 = require("../Batch");
const BatchClient_1 = require("../BatchClient");
const DescribeJobQueuesCommand_1 = require("../commands/DescribeJobQueuesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new DescribeJobQueuesCommand_1.DescribeJobQueuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeJobQueues(input, ...args);
};
async function* paginateDescribeJobQueues(config, input, ...additionalArguments) {
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
exports.paginateDescribeJobQueues = paginateDescribeJobQueues;
//# sourceMappingURL=DescribeJobQueuesPaginator.js.map
