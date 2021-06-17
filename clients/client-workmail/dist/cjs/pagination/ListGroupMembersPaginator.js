"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListGroupMembers = void 0;
const WorkMail_1 = require("../WorkMail");
const WorkMailClient_1 = require("../WorkMailClient");
const ListGroupMembersCommand_1 = require("../commands/ListGroupMembersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListGroupMembersCommand_1.ListGroupMembersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listGroupMembers(input, ...args);
};
async function* paginateListGroupMembers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof WorkMail_1.WorkMail) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof WorkMailClient_1.WorkMailClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected WorkMail | WorkMailClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListGroupMembers = paginateListGroupMembers;
//# sourceMappingURL=ListGroupMembersPaginator.js.map