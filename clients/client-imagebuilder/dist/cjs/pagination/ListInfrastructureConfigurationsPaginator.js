"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListInfrastructureConfigurations = void 0;
const Imagebuilder_1 = require("../Imagebuilder");
const ImagebuilderClient_1 = require("../ImagebuilderClient");
const ListInfrastructureConfigurationsCommand_1 = require("../commands/ListInfrastructureConfigurationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListInfrastructureConfigurationsCommand_1.ListInfrastructureConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listInfrastructureConfigurations(input, ...args);
};
async function* paginateListInfrastructureConfigurations(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Imagebuilder_1.Imagebuilder) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ImagebuilderClient_1.ImagebuilderClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListInfrastructureConfigurations = paginateListInfrastructureConfigurations;
//# sourceMappingURL=ListInfrastructureConfigurationsPaginator.js.map