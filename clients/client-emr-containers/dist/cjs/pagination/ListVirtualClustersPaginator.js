"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListVirtualClusters = void 0;
const EMRContainers_1 = require("../EMRContainers");
const EMRContainersClient_1 = require("../EMRContainersClient");
const ListVirtualClustersCommand_1 = require("../commands/ListVirtualClustersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListVirtualClustersCommand_1.ListVirtualClustersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listVirtualClusters(input, ...args);
};
async function* paginateListVirtualClusters(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof EMRContainers_1.EMRContainers) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof EMRContainersClient_1.EMRContainersClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected EMRContainers | EMRContainersClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListVirtualClusters = paginateListVirtualClusters;
//# sourceMappingURL=ListVirtualClustersPaginator.js.map