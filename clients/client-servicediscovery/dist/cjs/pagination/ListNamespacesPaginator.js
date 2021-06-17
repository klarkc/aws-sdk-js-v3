"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListNamespaces = void 0;
const ServiceDiscovery_1 = require("../ServiceDiscovery");
const ServiceDiscoveryClient_1 = require("../ServiceDiscoveryClient");
const ListNamespacesCommand_1 = require("../commands/ListNamespacesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListNamespacesCommand_1.ListNamespacesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listNamespaces(input, ...args);
};
async function* paginateListNamespaces(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof ServiceDiscovery_1.ServiceDiscovery) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ServiceDiscoveryClient_1.ServiceDiscoveryClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ServiceDiscovery | ServiceDiscoveryClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListNamespaces = paginateListNamespaces;
//# sourceMappingURL=ListNamespacesPaginator.js.map