"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCodeReviews = void 0;
const CodeGuruReviewer_1 = require("../CodeGuruReviewer");
const CodeGuruReviewerClient_1 = require("../CodeGuruReviewerClient");
const ListCodeReviewsCommand_1 = require("../commands/ListCodeReviewsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListCodeReviewsCommand_1.ListCodeReviewsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listCodeReviews(input, ...args);
};
async function* paginateListCodeReviews(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CodeGuruReviewer_1.CodeGuruReviewer) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeGuruReviewerClient_1.CodeGuruReviewerClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodeGuruReviewer | CodeGuruReviewerClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListCodeReviews = paginateListCodeReviews;
//# sourceMappingURL=ListCodeReviewsPaginator.js.map