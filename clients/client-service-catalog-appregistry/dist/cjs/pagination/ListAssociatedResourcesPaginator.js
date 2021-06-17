"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAssociatedResources = void 0;
const ServiceCatalogAppRegistry_1 = require("../ServiceCatalogAppRegistry");
const ServiceCatalogAppRegistryClient_1 = require("../ServiceCatalogAppRegistryClient");
const ListAssociatedResourcesCommand_1 = require("../commands/ListAssociatedResourcesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAssociatedResourcesCommand_1.ListAssociatedResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAssociatedResources(input, ...args);
};
async function* paginateListAssociatedResources(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof ServiceCatalogAppRegistry_1.ServiceCatalogAppRegistry) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ServiceCatalogAppRegistryClient_1.ServiceCatalogAppRegistryClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ServiceCatalogAppRegistry | ServiceCatalogAppRegistryClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAssociatedResources = paginateListAssociatedResources;
//# sourceMappingURL=ListAssociatedResourcesPaginator.js.map