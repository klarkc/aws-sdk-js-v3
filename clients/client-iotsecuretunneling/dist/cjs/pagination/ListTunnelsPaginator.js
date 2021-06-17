"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTunnels = void 0;
const IoTSecureTunneling_1 = require("../IoTSecureTunneling");
const IoTSecureTunnelingClient_1 = require("../IoTSecureTunnelingClient");
const ListTunnelsCommand_1 = require("../commands/ListTunnelsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTunnelsCommand_1.ListTunnelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTunnels(input, ...args);
};
async function* paginateListTunnels(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof IoTSecureTunneling_1.IoTSecureTunneling) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IoTSecureTunnelingClient_1.IoTSecureTunnelingClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IoTSecureTunneling | IoTSecureTunnelingClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListTunnels = paginateListTunnels;
//# sourceMappingURL=ListTunnelsPaginator.js.map