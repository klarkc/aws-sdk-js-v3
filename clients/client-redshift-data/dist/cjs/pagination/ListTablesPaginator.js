"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTables = void 0;
const RedshiftData_1 = require("../RedshiftData");
const RedshiftDataClient_1 = require("../RedshiftDataClient");
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
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof RedshiftData_1.RedshiftData) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof RedshiftDataClient_1.RedshiftDataClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected RedshiftData | RedshiftDataClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListTables = paginateListTables;
//# sourceMappingURL=ListTablesPaginator.js.map