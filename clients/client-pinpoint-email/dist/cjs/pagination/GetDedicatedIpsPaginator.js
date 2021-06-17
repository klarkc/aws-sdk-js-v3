"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetDedicatedIps = void 0;
const PinpointEmail_1 = require("../PinpointEmail");
const PinpointEmailClient_1 = require("../PinpointEmailClient");
const GetDedicatedIpsCommand_1 = require("../commands/GetDedicatedIpsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetDedicatedIpsCommand_1.GetDedicatedIpsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getDedicatedIps(input, ...args);
};
async function* paginateGetDedicatedIps(config, input, ...additionalArguments) {
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
exports.paginateGetDedicatedIps = paginateGetDedicatedIps;
//# sourceMappingURL=GetDedicatedIpsPaginator.js.map