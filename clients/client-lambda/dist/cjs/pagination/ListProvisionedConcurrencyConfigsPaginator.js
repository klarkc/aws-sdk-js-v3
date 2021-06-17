"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListProvisionedConcurrencyConfigs = void 0;
const Lambda_1 = require("../Lambda");
const LambdaClient_1 = require("../LambdaClient");
const ListProvisionedConcurrencyConfigsCommand_1 = require("../commands/ListProvisionedConcurrencyConfigsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListProvisionedConcurrencyConfigsCommand_1.ListProvisionedConcurrencyConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listProvisionedConcurrencyConfigs(input, ...args);
};
async function* paginateListProvisionedConcurrencyConfigs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
        if (config.client instanceof Lambda_1.Lambda) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LambdaClient_1.LambdaClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Lambda | LambdaClient");
        }
        yield page;
        token = page.NextMarker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListProvisionedConcurrencyConfigs = paginateListProvisionedConcurrencyConfigs;
//# sourceMappingURL=ListProvisionedConcurrencyConfigsPaginator.js.map