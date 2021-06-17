"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStorageLensConfigurations = void 0;
const S3Control_1 = require("../S3Control");
const S3ControlClient_1 = require("../S3ControlClient");
const ListStorageLensConfigurationsCommand_1 = require("../commands/ListStorageLensConfigurationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListStorageLensConfigurationsCommand_1.ListStorageLensConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listStorageLensConfigurations(input, ...args);
};
async function* paginateListStorageLensConfigurations(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        if (config.client instanceof S3Control_1.S3Control) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof S3ControlClient_1.S3ControlClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected S3Control | S3ControlClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListStorageLensConfigurations = paginateListStorageLensConfigurations;
//# sourceMappingURL=ListStorageLensConfigurationsPaginator.js.map