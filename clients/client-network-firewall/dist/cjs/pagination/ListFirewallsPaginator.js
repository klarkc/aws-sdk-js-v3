"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFirewalls = void 0;
const NetworkFirewall_1 = require("../NetworkFirewall");
const NetworkFirewallClient_1 = require("../NetworkFirewallClient");
const ListFirewallsCommand_1 = require("../commands/ListFirewallsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListFirewallsCommand_1.ListFirewallsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listFirewalls(input, ...args);
};
async function* paginateListFirewalls(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof NetworkFirewall_1.NetworkFirewall) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof NetworkFirewallClient_1.NetworkFirewallClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected NetworkFirewall | NetworkFirewallClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFirewalls = paginateListFirewalls;
//# sourceMappingURL=ListFirewallsPaginator.js.map