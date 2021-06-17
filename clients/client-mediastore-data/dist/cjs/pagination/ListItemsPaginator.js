"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListItems = void 0;
const MediaStoreData_1 = require("../MediaStoreData");
const MediaStoreDataClient_1 = require("../MediaStoreDataClient");
const ListItemsCommand_1 = require("../commands/ListItemsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListItemsCommand_1.ListItemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listItems(input, ...args);
};
async function* paginateListItems(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaStoreData_1.MediaStoreData) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaStoreDataClient_1.MediaStoreDataClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaStoreData | MediaStoreDataClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListItems = paginateListItems;
//# sourceMappingURL=ListItemsPaginator.js.map