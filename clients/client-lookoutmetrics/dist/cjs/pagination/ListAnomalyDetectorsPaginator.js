"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAnomalyDetectors = void 0;
const LookoutMetrics_1 = require("../LookoutMetrics");
const LookoutMetricsClient_1 = require("../LookoutMetricsClient");
const ListAnomalyDetectorsCommand_1 = require("../commands/ListAnomalyDetectorsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAnomalyDetectorsCommand_1.ListAnomalyDetectorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAnomalyDetectors(input, ...args);
};
async function* paginateListAnomalyDetectors(config, input, ...additionalArguments) {
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
exports.paginateListAnomalyDetectors = paginateListAnomalyDetectors;
//# sourceMappingURL=ListAnomalyDetectorsPaginator.js.map