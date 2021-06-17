"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetFeedback = void 0;
const LookoutMetrics_1 = require("../LookoutMetrics");
const LookoutMetricsClient_1 = require("../LookoutMetricsClient");
const GetFeedbackCommand_1 = require("../commands/GetFeedbackCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetFeedbackCommand_1.GetFeedbackCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getFeedback(input, ...args);
};
async function* paginateGetFeedback(config, input, ...additionalArguments) {
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
exports.paginateGetFeedback = paginateGetFeedback;
//# sourceMappingURL=GetFeedbackPaginator.js.map