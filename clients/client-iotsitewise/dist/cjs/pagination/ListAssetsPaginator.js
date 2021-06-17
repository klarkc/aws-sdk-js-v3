"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAssets = void 0;
const IoTSiteWise_1 = require("../IoTSiteWise");
const IoTSiteWiseClient_1 = require("../IoTSiteWiseClient");
const ListAssetsCommand_1 = require("../commands/ListAssetsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAssetsCommand_1.ListAssetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAssets(input, ...args);
};
async function* paginateListAssets(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof IoTSiteWise_1.IoTSiteWise) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IoTSiteWiseClient_1.IoTSiteWiseClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAssets = paginateListAssets;
//# sourceMappingURL=ListAssetsPaginator.js.map