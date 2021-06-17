"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStoredQueries = void 0;
const ConfigService_1 = require("../ConfigService");
const ConfigServiceClient_1 = require("../ConfigServiceClient");
const ListStoredQueriesCommand_1 = require("../commands/ListStoredQueriesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListStoredQueriesCommand_1.ListStoredQueriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listStoredQueries(input, ...args);
};
async function* paginateListStoredQueries(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof ConfigService_1.ConfigService) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ConfigServiceClient_1.ConfigServiceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListStoredQueries = paginateListStoredQueries;
//# sourceMappingURL=ListStoredQueriesPaginator.js.map