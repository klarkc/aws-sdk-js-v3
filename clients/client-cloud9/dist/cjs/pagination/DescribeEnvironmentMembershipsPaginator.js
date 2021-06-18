"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeEnvironmentMemberships = void 0;
const Cloud9_1 = require("../Cloud9");
const Cloud9Client_1 = require("../Cloud9Client");
const DescribeEnvironmentMembershipsCommand_1 = require("../commands/DescribeEnvironmentMembershipsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(
    new DescribeEnvironmentMembershipsCommand_1.DescribeEnvironmentMembershipsCommand(input),
    ...args
  );
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.describeEnvironmentMemberships(input, ...args);
};
async function* paginateDescribeEnvironmentMemberships(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Cloud9_1.Cloud9) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Cloud9Client_1.Cloud9Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Cloud9 | Cloud9Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateDescribeEnvironmentMemberships = paginateDescribeEnvironmentMemberships;
//# sourceMappingURL=DescribeEnvironmentMembershipsPaginator.js.map
