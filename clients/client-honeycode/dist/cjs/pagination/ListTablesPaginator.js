"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTables = void 0;
const Honeycode_1 = require("../Honeycode");
const HoneycodeClient_1 = require("../HoneycodeClient");
const ListTablesCommand_1 = require("../commands/ListTablesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTablesCommand_1.ListTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTables(input, ...args);
};
async function* paginateListTables(config, input, ...additionalArguments) {
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
exports.paginateListTables = paginateListTables;
//# sourceMappingURL=ListTablesPaginator.js.map