"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateSearchResources = void 0;
const ResourceGroups_1 = require("../ResourceGroups");
const ResourceGroupsClient_1 = require("../ResourceGroupsClient");
const SearchResourcesCommand_1 = require("../commands/SearchResourcesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new SearchResourcesCommand_1.SearchResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.searchResources(input, ...args);
};
async function* paginateSearchResources(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof ResourceGroups_1.ResourceGroups) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ResourceGroupsClient_1.ResourceGroupsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ResourceGroups | ResourceGroupsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateSearchResources = paginateSearchResources;
//# sourceMappingURL=SearchResourcesPaginator.js.map