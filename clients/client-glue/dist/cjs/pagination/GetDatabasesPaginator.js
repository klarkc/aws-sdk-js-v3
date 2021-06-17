"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetDatabases = void 0;
const Glue_1 = require("../Glue");
const GlueClient_1 = require("../GlueClient");
const GetDatabasesCommand_1 = require("../commands/GetDatabasesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetDatabasesCommand_1.GetDatabasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getDatabases(input, ...args);
};
async function* paginateGetDatabases(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Glue_1.Glue) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GlueClient_1.GlueClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Glue | GlueClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetDatabases = paginateGetDatabases;
//# sourceMappingURL=GetDatabasesPaginator.js.map