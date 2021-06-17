"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListManagedPoliciesInPermissionSet = void 0;
const SSOAdmin_1 = require("../SSOAdmin");
const SSOAdminClient_1 = require("../SSOAdminClient");
const ListManagedPoliciesInPermissionSetCommand_1 = require("../commands/ListManagedPoliciesInPermissionSetCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListManagedPoliciesInPermissionSetCommand_1.ListManagedPoliciesInPermissionSetCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listManagedPoliciesInPermissionSet(input, ...args);
};
async function* paginateListManagedPoliciesInPermissionSet(config, input, ...additionalArguments) {
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
exports.paginateListManagedPoliciesInPermissionSet = paginateListManagedPoliciesInPermissionSet;
//# sourceMappingURL=ListManagedPoliciesInPermissionSetPaginator.js.map