"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeCacheEngineVersions = void 0;
const ElastiCache_1 = require("../ElastiCache");
const ElastiCacheClient_1 = require("../ElastiCacheClient");
const DescribeCacheEngineVersionsCommand_1 = require("../commands/DescribeCacheEngineVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeCacheEngineVersionsCommand_1.DescribeCacheEngineVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeCacheEngineVersions(input, ...args);
};
async function* paginateDescribeCacheEngineVersions(config, input, ...additionalArguments) {
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
exports.paginateDescribeCacheEngineVersions = paginateDescribeCacheEngineVersions;
//# sourceMappingURL=DescribeCacheEngineVersionsPaginator.js.map