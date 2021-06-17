"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateQuery = void 0;
const TimestreamQuery_1 = require("../TimestreamQuery");
const TimestreamQueryClient_1 = require("../TimestreamQueryClient");
const QueryCommand_1 = require("../commands/QueryCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new QueryCommand_1.QueryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.query(input, ...args);
};
async function* paginateQuery(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxRows"] = config.pageSize;
        if (config.client instanceof TimestreamQuery_1.TimestreamQuery) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof TimestreamQueryClient_1.TimestreamQueryClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected TimestreamQuery | TimestreamQueryClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateQuery = paginateQuery;
//# sourceMappingURL=QueryPaginator.js.map