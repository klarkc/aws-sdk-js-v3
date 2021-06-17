"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListInvitations = void 0;
const Detective_1 = require("../Detective");
const DetectiveClient_1 = require("../DetectiveClient");
const ListInvitationsCommand_1 = require("../commands/ListInvitationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListInvitationsCommand_1.ListInvitationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listInvitations(input, ...args);
};
async function* paginateListInvitations(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Detective_1.Detective) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DetectiveClient_1.DetectiveClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Detective | DetectiveClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListInvitations = paginateListInvitations;
//# sourceMappingURL=ListInvitationsPaginator.js.map