"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeDBProxyTargetGroups = void 0;
const RDS_1 = require("../RDS");
const RDSClient_1 = require("../RDSClient");
const DescribeDBProxyTargetGroupsCommand_1 = require("../commands/DescribeDBProxyTargetGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeDBProxyTargetGroupsCommand_1.DescribeDBProxyTargetGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeDBProxyTargetGroups(input, ...args);
};
async function* paginateDescribeDBProxyTargetGroups(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxRecords"] = config.pageSize;
        if (config.client instanceof RDS_1.RDS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof RDSClient_1.RDSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected RDS | RDSClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeDBProxyTargetGroups = paginateDescribeDBProxyTargetGroups;
//# sourceMappingURL=DescribeDBProxyTargetGroupsPaginator.js.map