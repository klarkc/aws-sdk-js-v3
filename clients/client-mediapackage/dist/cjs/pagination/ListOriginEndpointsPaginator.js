"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListOriginEndpoints = void 0;
const MediaPackage_1 = require("../MediaPackage");
const MediaPackageClient_1 = require("../MediaPackageClient");
const ListOriginEndpointsCommand_1 = require("../commands/ListOriginEndpointsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListOriginEndpointsCommand_1.ListOriginEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listOriginEndpoints(input, ...args);
};
async function* paginateListOriginEndpoints(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaPackage_1.MediaPackage) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaPackageClient_1.MediaPackageClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaPackage | MediaPackageClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListOriginEndpoints = paginateListOriginEndpoints;
//# sourceMappingURL=ListOriginEndpointsPaginator.js.map