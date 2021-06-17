"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeCodeCoverages = void 0;
const CodeBuild_1 = require("../CodeBuild");
const CodeBuildClient_1 = require("../CodeBuildClient");
const DescribeCodeCoveragesCommand_1 = require("../commands/DescribeCodeCoveragesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeCodeCoveragesCommand_1.DescribeCodeCoveragesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeCodeCoverages(input, ...args);
};
async function* paginateDescribeCodeCoverages(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof CodeBuild_1.CodeBuild) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeBuildClient_1.CodeBuildClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeCodeCoverages = paginateDescribeCodeCoverages;
//# sourceMappingURL=DescribeCodeCoveragesPaginator.js.map