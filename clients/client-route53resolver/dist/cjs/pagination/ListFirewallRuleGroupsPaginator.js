"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFirewallRuleGroups = void 0;
const Route53Resolver_1 = require("../Route53Resolver");
const Route53ResolverClient_1 = require("../Route53ResolverClient");
const ListFirewallRuleGroupsCommand_1 = require("../commands/ListFirewallRuleGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListFirewallRuleGroupsCommand_1.ListFirewallRuleGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listFirewallRuleGroups(input, ...args);
};
async function* paginateListFirewallRuleGroups(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Route53Resolver_1.Route53Resolver) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof Route53ResolverClient_1.Route53ResolverClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Route53Resolver | Route53ResolverClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFirewallRuleGroups = paginateListFirewallRuleGroups;
//# sourceMappingURL=ListFirewallRuleGroupsPaginator.js.map