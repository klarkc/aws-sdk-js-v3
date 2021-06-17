"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateBatchGetTraces = void 0;
const XRay_1 = require("../XRay");
const XRayClient_1 = require("../XRayClient");
const BatchGetTracesCommand_1 = require("../commands/BatchGetTracesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new BatchGetTracesCommand_1.BatchGetTracesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.batchGetTraces(input, ...args);
};
async function* paginateBatchGetTraces(config, input, ...additionalArguments) {
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
exports.paginateBatchGetTraces = paginateBatchGetTraces;
//# sourceMappingURL=BatchGetTracesPaginator.js.map