"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListMembers = void 0;
const ManagedBlockchain_1 = require("../ManagedBlockchain");
const ManagedBlockchainClient_1 = require("../ManagedBlockchainClient");
const ListMembersCommand_1 = require("../commands/ListMembersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListMembersCommand_1.ListMembersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listMembers(input, ...args);
};
async function* paginateListMembers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof ManagedBlockchain_1.ManagedBlockchain) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ManagedBlockchainClient_1.ManagedBlockchainClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ManagedBlockchain | ManagedBlockchainClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListMembers = paginateListMembers;
//# sourceMappingURL=ListMembersPaginator.js.map