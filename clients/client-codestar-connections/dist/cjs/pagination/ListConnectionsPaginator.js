"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListConnections = void 0;
const CodeStarConnections_1 = require("../CodeStarConnections");
const CodeStarConnectionsClient_1 = require("../CodeStarConnectionsClient");
const ListConnectionsCommand_1 = require("../commands/ListConnectionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListConnectionsCommand_1.ListConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listConnections(input, ...args);
};
async function* paginateListConnections(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CodeStarConnections_1.CodeStarConnections) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeStarConnectionsClient_1.CodeStarConnectionsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodeStarConnections | CodeStarConnectionsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListConnections = paginateListConnections;
//# sourceMappingURL=ListConnectionsPaginator.js.map