"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAgents = void 0;
const DataSync_1 = require("../DataSync");
const DataSyncClient_1 = require("../DataSyncClient");
const ListAgentsCommand_1 = require("../commands/ListAgentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAgentsCommand_1.ListAgentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAgents(input, ...args);
};
async function* paginateListAgents(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof DataSync_1.DataSync) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DataSyncClient_1.DataSyncClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DataSync | DataSyncClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAgents = paginateListAgents;
//# sourceMappingURL=ListAgentsPaginator.js.map