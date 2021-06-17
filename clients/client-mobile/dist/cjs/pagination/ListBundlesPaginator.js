"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListBundles = void 0;
const Mobile_1 = require("../Mobile");
const MobileClient_1 = require("../MobileClient");
const ListBundlesCommand_1 = require("../commands/ListBundlesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListBundlesCommand_1.ListBundlesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listBundles(input, ...args);
};
async function* paginateListBundles(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Mobile_1.Mobile) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MobileClient_1.MobileClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Mobile | MobileClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListBundles = paginateListBundles;
//# sourceMappingURL=ListBundlesPaginator.js.map