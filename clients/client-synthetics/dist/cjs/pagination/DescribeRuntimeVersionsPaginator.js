"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeRuntimeVersions = void 0;
const Synthetics_1 = require("../Synthetics");
const SyntheticsClient_1 = require("../SyntheticsClient");
const DescribeRuntimeVersionsCommand_1 = require("../commands/DescribeRuntimeVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeRuntimeVersionsCommand_1.DescribeRuntimeVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeRuntimeVersions(input, ...args);
};
async function* paginateDescribeRuntimeVersions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Synthetics_1.Synthetics) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SyntheticsClient_1.SyntheticsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Synthetics | SyntheticsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeRuntimeVersions = paginateDescribeRuntimeVersions;
//# sourceMappingURL=DescribeRuntimeVersionsPaginator.js.map