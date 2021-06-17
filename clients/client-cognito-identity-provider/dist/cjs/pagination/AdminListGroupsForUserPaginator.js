"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateAdminListGroupsForUser = void 0;
const CognitoIdentityProvider_1 = require("../CognitoIdentityProvider");
const CognitoIdentityProviderClient_1 = require("../CognitoIdentityProviderClient");
const AdminListGroupsForUserCommand_1 = require("../commands/AdminListGroupsForUserCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new AdminListGroupsForUserCommand_1.AdminListGroupsForUserCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.adminListGroupsForUser(input, ...args);
};
async function* paginateAdminListGroupsForUser(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof CognitoIdentityProvider_1.CognitoIdentityProvider) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CognitoIdentityProviderClient_1.CognitoIdentityProviderClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CognitoIdentityProvider | CognitoIdentityProviderClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateAdminListGroupsForUser = paginateAdminListGroupsForUser;
//# sourceMappingURL=AdminListGroupsForUserPaginator.js.map