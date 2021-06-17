"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeReservedElasticsearchInstanceOfferings = void 0;
const ElasticsearchService_1 = require("../ElasticsearchService");
const ElasticsearchServiceClient_1 = require("../ElasticsearchServiceClient");
const DescribeReservedElasticsearchInstanceOfferingsCommand_1 = require("../commands/DescribeReservedElasticsearchInstanceOfferingsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeReservedElasticsearchInstanceOfferingsCommand_1.DescribeReservedElasticsearchInstanceOfferingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeReservedElasticsearchInstanceOfferings(input, ...args);
};
async function* paginateDescribeReservedElasticsearchInstanceOfferings(config, input, ...additionalArguments) {
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
exports.paginateDescribeReservedElasticsearchInstanceOfferings = paginateDescribeReservedElasticsearchInstanceOfferings;
//# sourceMappingURL=DescribeReservedElasticsearchInstanceOfferingsPaginator.js.map