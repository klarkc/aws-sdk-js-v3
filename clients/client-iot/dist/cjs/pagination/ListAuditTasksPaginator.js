"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAuditTasks = void 0;
const IoT_1 = require("../IoT");
const IoTClient_1 = require("../IoTClient");
const ListAuditTasksCommand_1 = require("../commands/ListAuditTasksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAuditTasksCommand_1.ListAuditTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAuditTasks(input, ...args);
};
async function* paginateListAuditTasks(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof IoT_1.IoT) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IoTClient_1.IoTClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IoT | IoTClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAuditTasks = paginateListAuditTasks;
//# sourceMappingURL=ListAuditTasksPaginator.js.map