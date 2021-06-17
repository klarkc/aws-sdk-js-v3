"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateQueryTableRows = void 0;
const Honeycode_1 = require("../Honeycode");
const HoneycodeClient_1 = require("../HoneycodeClient");
const QueryTableRowsCommand_1 = require("../commands/QueryTableRowsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new QueryTableRowsCommand_1.QueryTableRowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.queryTableRows(input, ...args);
};
async function* paginateQueryTableRows(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Honeycode_1.Honeycode) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof HoneycodeClient_1.HoneycodeClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Honeycode | HoneycodeClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateQueryTableRows = paginateQueryTableRows;
//# sourceMappingURL=QueryTableRowsPaginator.js.map