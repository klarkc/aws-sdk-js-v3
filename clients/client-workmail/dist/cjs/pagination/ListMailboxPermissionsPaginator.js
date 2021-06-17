"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListMailboxPermissions = void 0;
const WorkMail_1 = require("../WorkMail");
const WorkMailClient_1 = require("../WorkMailClient");
const ListMailboxPermissionsCommand_1 = require("../commands/ListMailboxPermissionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListMailboxPermissionsCommand_1.ListMailboxPermissionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listMailboxPermissions(input, ...args);
};
async function* paginateListMailboxPermissions(config, input, ...additionalArguments) {
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
exports.paginateListMailboxPermissions = paginateListMailboxPermissions;
//# sourceMappingURL=ListMailboxPermissionsPaginator.js.map