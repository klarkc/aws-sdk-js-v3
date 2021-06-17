"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDedicatedIpPools = void 0;
const PinpointEmail_1 = require("../PinpointEmail");
const PinpointEmailClient_1 = require("../PinpointEmailClient");
const ListDedicatedIpPoolsCommand_1 = require("../commands/ListDedicatedIpPoolsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDedicatedIpPoolsCommand_1.ListDedicatedIpPoolsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDedicatedIpPools(input, ...args);
};
async function* paginateListDedicatedIpPools(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["PageSize"] = config.pageSize;
        if (config.client instanceof PinpointEmail_1.PinpointEmail) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof PinpointEmailClient_1.PinpointEmailClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDedicatedIpPools = paginateListDedicatedIpPools;
//# sourceMappingURL=ListDedicatedIpPoolsPaginator.js.map