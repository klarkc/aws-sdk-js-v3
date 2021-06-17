"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetCrawlerMetrics = void 0;
const Glue_1 = require("../Glue");
const GlueClient_1 = require("../GlueClient");
const GetCrawlerMetricsCommand_1 = require("../commands/GetCrawlerMetricsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetCrawlerMetricsCommand_1.GetCrawlerMetricsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getCrawlerMetrics(input, ...args);
};
async function* paginateGetCrawlerMetrics(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Glue_1.Glue) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GlueClient_1.GlueClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Glue | GlueClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetCrawlerMetrics = paginateGetCrawlerMetrics;
//# sourceMappingURL=GetCrawlerMetricsPaginator.js.map