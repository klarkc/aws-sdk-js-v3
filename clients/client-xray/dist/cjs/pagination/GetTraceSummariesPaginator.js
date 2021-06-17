"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetTraceSummaries = void 0;
const XRay_1 = require("../XRay");
const XRayClient_1 = require("../XRayClient");
const GetTraceSummariesCommand_1 = require("../commands/GetTraceSummariesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetTraceSummariesCommand_1.GetTraceSummariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getTraceSummaries(input, ...args);
};
async function* paginateGetTraceSummaries(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        if (config.client instanceof XRay_1.XRay) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof XRayClient_1.XRayClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected XRay | XRayClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetTraceSummaries = paginateGetTraceSummaries;
//# sourceMappingURL=GetTraceSummariesPaginator.js.map