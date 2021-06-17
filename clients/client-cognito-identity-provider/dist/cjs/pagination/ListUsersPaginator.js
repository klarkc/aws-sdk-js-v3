"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListUsers = void 0;
const CognitoIdentityProvider_1 = require("../CognitoIdentityProvider");
const CognitoIdentityProviderClient_1 = require("../CognitoIdentityProviderClient");
const ListUsersCommand_1 = require("../commands/ListUsersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListUsersCommand_1.ListUsersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listUsers(input, ...args);
};
async function* paginateListUsers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.PaginationToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.PaginationToken = token;
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
        token = page.PaginationToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListUsers = paginateListUsers;
//# sourceMappingURL=ListUsersPaginator.js.map