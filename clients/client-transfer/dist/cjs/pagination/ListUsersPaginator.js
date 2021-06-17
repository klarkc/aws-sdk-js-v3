"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListUsers = void 0;
const Transfer_1 = require("../Transfer");
const TransferClient_1 = require("../TransferClient");
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
        if (config.client instanceof Transfer_1.Transfer) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof TransferClient_1.TransferClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Transfer | TransferClient");
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