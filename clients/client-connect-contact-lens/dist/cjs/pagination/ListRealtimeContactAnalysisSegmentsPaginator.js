"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRealtimeContactAnalysisSegments = void 0;
const ConnectContactLens_1 = require("../ConnectContactLens");
const ConnectContactLensClient_1 = require("../ConnectContactLensClient");
const ListRealtimeContactAnalysisSegmentsCommand_1 = require("../commands/ListRealtimeContactAnalysisSegmentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListRealtimeContactAnalysisSegmentsCommand_1.ListRealtimeContactAnalysisSegmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listRealtimeContactAnalysisSegments(input, ...args);
};
async function* paginateListRealtimeContactAnalysisSegments(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof ConnectContactLens_1.ConnectContactLens) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ConnectContactLensClient_1.ConnectContactLensClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ConnectContactLens | ConnectContactLensClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListRealtimeContactAnalysisSegments = paginateListRealtimeContactAnalysisSegments;
//# sourceMappingURL=ListRealtimeContactAnalysisSegmentsPaginator.js.map