"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAnomalyGroupSummaries = void 0;
const LookoutMetrics_1 = require("../LookoutMetrics");
const LookoutMetricsClient_1 = require("../LookoutMetricsClient");
const ListAnomalyGroupSummariesCommand_1 = require("../commands/ListAnomalyGroupSummariesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAnomalyGroupSummariesCommand_1.ListAnomalyGroupSummariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAnomalyGroupSummaries(input, ...args);
};
async function* paginateListAnomalyGroupSummaries(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof LookoutMetrics_1.LookoutMetrics) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LookoutMetricsClient_1.LookoutMetricsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected LookoutMetrics | LookoutMetricsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAnomalyGroupSummaries = paginateListAnomalyGroupSummaries;
//# sourceMappingURL=ListAnomalyGroupSummariesPaginator.js.map