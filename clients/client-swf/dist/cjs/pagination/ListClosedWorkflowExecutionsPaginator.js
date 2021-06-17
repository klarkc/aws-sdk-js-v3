"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListClosedWorkflowExecutions = void 0;
const SWF_1 = require("../SWF");
const SWFClient_1 = require("../SWFClient");
const ListClosedWorkflowExecutionsCommand_1 = require("../commands/ListClosedWorkflowExecutionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListClosedWorkflowExecutionsCommand_1.ListClosedWorkflowExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listClosedWorkflowExecutions(input, ...args);
};
async function* paginateListClosedWorkflowExecutions(config, input, ...additionalArguments) {
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
exports.paginateListClosedWorkflowExecutions = paginateListClosedWorkflowExecutions;
//# sourceMappingURL=ListClosedWorkflowExecutionsPaginator.js.map