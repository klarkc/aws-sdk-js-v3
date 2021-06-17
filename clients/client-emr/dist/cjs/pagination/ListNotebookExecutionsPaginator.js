"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListNotebookExecutions = void 0;
const EMR_1 = require("../EMR");
const EMRClient_1 = require("../EMRClient");
const ListNotebookExecutionsCommand_1 = require("../commands/ListNotebookExecutionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListNotebookExecutionsCommand_1.ListNotebookExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listNotebookExecutions(input, ...args);
};
async function* paginateListNotebookExecutions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        if (config.client instanceof EMR_1.EMR) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof EMRClient_1.EMRClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected EMR | EMRClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListNotebookExecutions = paginateListNotebookExecutions;
//# sourceMappingURL=ListNotebookExecutionsPaginator.js.map