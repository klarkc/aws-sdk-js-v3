"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEntities = void 0;
const MarketplaceCatalog_1 = require("../MarketplaceCatalog");
const MarketplaceCatalogClient_1 = require("../MarketplaceCatalogClient");
const ListEntitiesCommand_1 = require("../commands/ListEntitiesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListEntitiesCommand_1.ListEntitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listEntities(input, ...args);
};
async function* paginateListEntities(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MarketplaceCatalog_1.MarketplaceCatalog) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MarketplaceCatalogClient_1.MarketplaceCatalogClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MarketplaceCatalog | MarketplaceCatalogClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListEntities = paginateListEntities;
//# sourceMappingURL=ListEntitiesPaginator.js.map