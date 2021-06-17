"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPackagingConfigurations = void 0;
const MediaPackageVod_1 = require("../MediaPackageVod");
const MediaPackageVodClient_1 = require("../MediaPackageVodClient");
const ListPackagingConfigurationsCommand_1 = require("../commands/ListPackagingConfigurationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPackagingConfigurationsCommand_1.ListPackagingConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPackagingConfigurations(input, ...args);
};
async function* paginateListPackagingConfigurations(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaPackageVod_1.MediaPackageVod) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaPackageVodClient_1.MediaPackageVodClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaPackageVod | MediaPackageVodClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPackagingConfigurations = paginateListPackagingConfigurations;
//# sourceMappingURL=ListPackagingConfigurationsPaginator.js.map