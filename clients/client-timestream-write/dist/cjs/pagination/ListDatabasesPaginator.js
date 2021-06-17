"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDatabases = void 0;
const TimestreamWrite_1 = require("../TimestreamWrite");
const TimestreamWriteClient_1 = require("../TimestreamWriteClient");
const ListDatabasesCommand_1 = require("../commands/ListDatabasesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDatabasesCommand_1.ListDatabasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDatabases(input, ...args);
};
async function* paginateListDatabases(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof TimestreamWrite_1.TimestreamWrite) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof TimestreamWriteClient_1.TimestreamWriteClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected TimestreamWrite | TimestreamWriteClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDatabases = paginateListDatabases;
//# sourceMappingURL=ListDatabasesPaginator.js.map