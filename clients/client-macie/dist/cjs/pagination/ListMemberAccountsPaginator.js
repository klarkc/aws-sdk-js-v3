"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListMemberAccounts = void 0;
const Macie_1 = require("../Macie");
const MacieClient_1 = require("../MacieClient");
const ListMemberAccountsCommand_1 = require("../commands/ListMemberAccountsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListMemberAccountsCommand_1.ListMemberAccountsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listMemberAccounts(input, ...args);
};
async function* paginateListMemberAccounts(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Macie_1.Macie) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MacieClient_1.MacieClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Macie | MacieClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListMemberAccounts = paginateListMemberAccounts;
//# sourceMappingURL=ListMemberAccountsPaginator.js.map