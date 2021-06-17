"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListGroups = void 0;
const ResourceGroups_1 = require("../ResourceGroups");
const ResourceGroupsClient_1 = require("../ResourceGroupsClient");
const ListGroupsCommand_1 = require("../commands/ListGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListGroupsCommand_1.ListGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listGroups(input, ...args);
};
async function* paginateListGroups(config, input, ...additionalArguments) {
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
exports.paginateListGroups = paginateListGroups;
//# sourceMappingURL=ListGroupsPaginator.js.map