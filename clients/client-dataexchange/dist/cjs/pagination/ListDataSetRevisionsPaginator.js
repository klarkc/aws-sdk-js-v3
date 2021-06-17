"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDataSetRevisions = void 0;
const DataExchange_1 = require("../DataExchange");
const DataExchangeClient_1 = require("../DataExchangeClient");
const ListDataSetRevisionsCommand_1 = require("../commands/ListDataSetRevisionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDataSetRevisionsCommand_1.ListDataSetRevisionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDataSetRevisions(input, ...args);
};
async function* paginateListDataSetRevisions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof DataExchange_1.DataExchange) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DataExchangeClient_1.DataExchangeClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DataExchange | DataExchangeClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDataSetRevisions = paginateListDataSetRevisions;
//# sourceMappingURL=ListDataSetRevisionsPaginator.js.map