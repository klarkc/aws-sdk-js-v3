"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListNetworks = void 0;
const ManagedBlockchain_1 = require("../ManagedBlockchain");
const ManagedBlockchainClient_1 = require("../ManagedBlockchainClient");
const ListNetworksCommand_1 = require("../commands/ListNetworksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListNetworksCommand_1.ListNetworksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listNetworks(input, ...args);
};
async function* paginateListNetworks(config, input, ...additionalArguments) {
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
exports.paginateListNetworks = paginateListNetworks;
//# sourceMappingURL=ListNetworksPaginator.js.map