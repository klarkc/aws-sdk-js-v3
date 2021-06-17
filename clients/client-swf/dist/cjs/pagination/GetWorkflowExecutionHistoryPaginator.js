"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetWorkflowExecutionHistory = void 0;
const SWF_1 = require("../SWF");
const SWFClient_1 = require("../SWFClient");
const GetWorkflowExecutionHistoryCommand_1 = require("../commands/GetWorkflowExecutionHistoryCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetWorkflowExecutionHistoryCommand_1.GetWorkflowExecutionHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getWorkflowExecutionHistory(input, ...args);
};
async function* paginateGetWorkflowExecutionHistory(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextPageToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextPageToken = token;
        input["maximumPageSize"] = config.pageSize;
        if (config.client instanceof SWF_1.SWF) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SWFClient_1.SWFClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SWF | SWFClient");
        }
        yield page;
        token = page.nextPageToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetWorkflowExecutionHistory = paginateGetWorkflowExecutionHistory;
//# sourceMappingURL=GetWorkflowExecutionHistoryPaginator.js.map