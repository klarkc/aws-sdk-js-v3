"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEntitlements = void 0;
const MediaConnect_1 = require("../MediaConnect");
const MediaConnectClient_1 = require("../MediaConnectClient");
const ListEntitlementsCommand_1 = require("../commands/ListEntitlementsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListEntitlementsCommand_1.ListEntitlementsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listEntitlements(input, ...args);
};
async function* paginateListEntitlements(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaConnect_1.MediaConnect) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaConnectClient_1.MediaConnectClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListEntitlements = paginateListEntitlements;
//# sourceMappingURL=ListEntitlementsPaginator.js.map