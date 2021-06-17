"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeEcsClusters = void 0;
const OpsWorks_1 = require("../OpsWorks");
const OpsWorksClient_1 = require("../OpsWorksClient");
const DescribeEcsClustersCommand_1 = require("../commands/DescribeEcsClustersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeEcsClustersCommand_1.DescribeEcsClustersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeEcsClusters(input, ...args);
};
async function* paginateDescribeEcsClusters(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof OpsWorks_1.OpsWorks) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof OpsWorksClient_1.OpsWorksClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected OpsWorks | OpsWorksClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeEcsClusters = paginateDescribeEcsClusters;
//# sourceMappingURL=DescribeEcsClustersPaginator.js.map