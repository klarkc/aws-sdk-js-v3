"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeUserGroups = void 0;
const ElastiCache_1 = require("../ElastiCache");
const ElastiCacheClient_1 = require("../ElastiCacheClient");
const DescribeUserGroupsCommand_1 = require("../commands/DescribeUserGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeUserGroupsCommand_1.DescribeUserGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeUserGroups(input, ...args);
};
async function* paginateDescribeUserGroups(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxRecords"] = config.pageSize;
        if (config.client instanceof ElastiCache_1.ElastiCache) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ElastiCacheClient_1.ElastiCacheClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeUserGroups = paginateDescribeUserGroups;
//# sourceMappingURL=DescribeUserGroupsPaginator.js.map