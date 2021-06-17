"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeReservedElasticsearchInstances = void 0;
const ElasticsearchService_1 = require("../ElasticsearchService");
const ElasticsearchServiceClient_1 = require("../ElasticsearchServiceClient");
const DescribeReservedElasticsearchInstancesCommand_1 = require("../commands/DescribeReservedElasticsearchInstancesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeReservedElasticsearchInstancesCommand_1.DescribeReservedElasticsearchInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeReservedElasticsearchInstances(input, ...args);
};
async function* paginateDescribeReservedElasticsearchInstances(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof ElasticsearchService_1.ElasticsearchService) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ElasticsearchServiceClient_1.ElasticsearchServiceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeReservedElasticsearchInstances = paginateDescribeReservedElasticsearchInstances;
//# sourceMappingURL=DescribeReservedElasticsearchInstancesPaginator.js.map