"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFindings = void 0;
const Inspector_1 = require("../Inspector");
const InspectorClient_1 = require("../InspectorClient");
const ListFindingsCommand_1 = require("../commands/ListFindingsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListFindingsCommand_1.ListFindingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listFindings(input, ...args);
};
async function* paginateListFindings(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Inspector_1.Inspector) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof InspectorClient_1.InspectorClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Inspector | InspectorClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFindings = paginateListFindings;
//# sourceMappingURL=ListFindingsPaginator.js.map