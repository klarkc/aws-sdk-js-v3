"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListUsers = void 0;
const Identitystore_1 = require("../Identitystore");
const IdentitystoreClient_1 = require("../IdentitystoreClient");
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
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Identitystore_1.Identitystore) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IdentitystoreClient_1.IdentitystoreClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Identitystore | IdentitystoreClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListUsers = paginateListUsers;
//# sourceMappingURL=ListUsersPaginator.js.map