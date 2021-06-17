"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPendingInvitationResources = void 0;
const RAM_1 = require("../RAM");
const RAMClient_1 = require("../RAMClient");
const ListPendingInvitationResourcesCommand_1 = require("../commands/ListPendingInvitationResourcesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPendingInvitationResourcesCommand_1.ListPendingInvitationResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPendingInvitationResources(input, ...args);
};
async function* paginateListPendingInvitationResources(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof RAM_1.RAM) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof RAMClient_1.RAMClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected RAM | RAMClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPendingInvitationResources = paginateListPendingInvitationResources;
//# sourceMappingURL=ListPendingInvitationResourcesPaginator.js.map