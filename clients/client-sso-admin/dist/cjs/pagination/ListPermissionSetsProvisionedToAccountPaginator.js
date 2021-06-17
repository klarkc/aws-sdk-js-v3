"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPermissionSetsProvisionedToAccount = void 0;
const SSOAdmin_1 = require("../SSOAdmin");
const SSOAdminClient_1 = require("../SSOAdminClient");
const ListPermissionSetsProvisionedToAccountCommand_1 = require("../commands/ListPermissionSetsProvisionedToAccountCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPermissionSetsProvisionedToAccountCommand_1.ListPermissionSetsProvisionedToAccountCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPermissionSetsProvisionedToAccount(input, ...args);
};
async function* paginateListPermissionSetsProvisionedToAccount(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SSOAdmin_1.SSOAdmin) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSOAdminClient_1.SSOAdminClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSOAdmin | SSOAdminClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPermissionSetsProvisionedToAccount = paginateListPermissionSetsProvisionedToAccount;
//# sourceMappingURL=ListPermissionSetsProvisionedToAccountPaginator.js.map