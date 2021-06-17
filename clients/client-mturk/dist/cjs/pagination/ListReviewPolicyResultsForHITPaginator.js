"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListReviewPolicyResultsForHIT = void 0;
const MTurk_1 = require("../MTurk");
const MTurkClient_1 = require("../MTurkClient");
const ListReviewPolicyResultsForHITCommand_1 = require("../commands/ListReviewPolicyResultsForHITCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListReviewPolicyResultsForHITCommand_1.ListReviewPolicyResultsForHITCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listReviewPolicyResultsForHIT(input, ...args);
};
async function* paginateListReviewPolicyResultsForHIT(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MTurk_1.MTurk) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MTurkClient_1.MTurkClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MTurk | MTurkClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListReviewPolicyResultsForHIT = paginateListReviewPolicyResultsForHIT;
//# sourceMappingURL=ListReviewPolicyResultsForHITPaginator.js.map