"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeStandards = void 0;
const SecurityHub_1 = require("../SecurityHub");
const SecurityHubClient_1 = require("../SecurityHubClient");
const DescribeStandardsCommand_1 = require("../commands/DescribeStandardsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeStandardsCommand_1.DescribeStandardsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeStandards(input, ...args);
};
async function* paginateDescribeStandards(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SecurityHub_1.SecurityHub) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SecurityHubClient_1.SecurityHubClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeStandards = paginateDescribeStandards;
//# sourceMappingURL=DescribeStandardsPaginator.js.map