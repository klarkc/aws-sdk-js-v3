"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeCanariesLastRun = void 0;
const Synthetics_1 = require("../Synthetics");
const SyntheticsClient_1 = require("../SyntheticsClient");
const DescribeCanariesLastRunCommand_1 = require("../commands/DescribeCanariesLastRunCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeCanariesLastRunCommand_1.DescribeCanariesLastRunCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeCanariesLastRun(input, ...args);
};
async function* paginateDescribeCanariesLastRun(config, input, ...additionalArguments) {
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
exports.paginateDescribeCanariesLastRun = paginateDescribeCanariesLastRun;
//# sourceMappingURL=DescribeCanariesLastRunPaginator.js.map