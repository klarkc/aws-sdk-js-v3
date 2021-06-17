"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRuleGroups = void 0;
const NetworkFirewall_1 = require("../NetworkFirewall");
const NetworkFirewallClient_1 = require("../NetworkFirewallClient");
const ListRuleGroupsCommand_1 = require("../commands/ListRuleGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListRuleGroupsCommand_1.ListRuleGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listRuleGroups(input, ...args);
};
async function* paginateListRuleGroups(config, input, ...additionalArguments) {
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
exports.paginateListRuleGroups = paginateListRuleGroups;
//# sourceMappingURL=ListRuleGroupsPaginator.js.map