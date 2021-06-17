"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDiscoveredResources = void 0;
const MigrationHub_1 = require("../MigrationHub");
const MigrationHubClient_1 = require("../MigrationHubClient");
const ListDiscoveredResourcesCommand_1 = require("../commands/ListDiscoveredResourcesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDiscoveredResourcesCommand_1.ListDiscoveredResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDiscoveredResources(input, ...args);
};
async function* paginateListDiscoveredResources(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MigrationHub_1.MigrationHub) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MigrationHubClient_1.MigrationHubClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MigrationHub | MigrationHubClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDiscoveredResources = paginateListDiscoveredResources;
//# sourceMappingURL=ListDiscoveredResourcesPaginator.js.map