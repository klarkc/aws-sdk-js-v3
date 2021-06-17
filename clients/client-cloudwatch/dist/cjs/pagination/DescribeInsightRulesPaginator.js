"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeInsightRules = void 0;
const CloudWatch_1 = require("../CloudWatch");
const CloudWatchClient_1 = require("../CloudWatchClient");
const DescribeInsightRulesCommand_1 = require("../commands/DescribeInsightRulesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeInsightRulesCommand_1.DescribeInsightRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeInsightRules(input, ...args);
};
async function* paginateDescribeInsightRules(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CloudWatch_1.CloudWatch) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchClient_1.CloudWatchClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeInsightRules = paginateDescribeInsightRules;
//# sourceMappingURL=DescribeInsightRulesPaginator.js.map