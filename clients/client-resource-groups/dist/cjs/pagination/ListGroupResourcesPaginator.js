"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListGroupResources = void 0;
const ResourceGroups_1 = require("../ResourceGroups");
const ResourceGroupsClient_1 = require("../ResourceGroupsClient");
const ListGroupResourcesCommand_1 = require("../commands/ListGroupResourcesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListGroupResourcesCommand_1.ListGroupResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listGroupResources(input, ...args);
};
async function* paginateListGroupResources(config, input, ...additionalArguments) {
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
exports.paginateListGroupResources = paginateListGroupResources;
//# sourceMappingURL=ListGroupResourcesPaginator.js.map