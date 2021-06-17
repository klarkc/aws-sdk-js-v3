"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListProvisioningArtifactsForServiceAction = void 0;
const ServiceCatalog_1 = require("../ServiceCatalog");
const ServiceCatalogClient_1 = require("../ServiceCatalogClient");
const ListProvisioningArtifactsForServiceActionCommand_1 = require("../commands/ListProvisioningArtifactsForServiceActionCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListProvisioningArtifactsForServiceActionCommand_1.ListProvisioningArtifactsForServiceActionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listProvisioningArtifactsForServiceAction(input, ...args);
};
async function* paginateListProvisioningArtifactsForServiceAction(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.PageToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.PageToken = token;
        input["PageSize"] = config.pageSize;
        if (config.client instanceof ServiceCatalog_1.ServiceCatalog) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ServiceCatalogClient_1.ServiceCatalogClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
        }
        yield page;
        token = page.NextPageToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListProvisioningArtifactsForServiceAction = paginateListProvisioningArtifactsForServiceAction;
//# sourceMappingURL=ListProvisioningArtifactsForServiceActionPaginator.js.map