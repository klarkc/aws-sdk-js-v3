"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetProvisionedProductOutputs = void 0;
const ServiceCatalog_1 = require("../ServiceCatalog");
const ServiceCatalogClient_1 = require("../ServiceCatalogClient");
const GetProvisionedProductOutputsCommand_1 = require("../commands/GetProvisionedProductOutputsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetProvisionedProductOutputsCommand_1.GetProvisionedProductOutputsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getProvisionedProductOutputs(input, ...args);
};
async function* paginateGetProvisionedProductOutputs(config, input, ...additionalArguments) {
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
exports.paginateGetProvisionedProductOutputs = paginateGetProvisionedProductOutputs;
//# sourceMappingURL=GetProvisionedProductOutputsPaginator.js.map