"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeTargetGroups = void 0;
const ElasticLoadBalancingV2_1 = require("../ElasticLoadBalancingV2");
const ElasticLoadBalancingV2Client_1 = require("../ElasticLoadBalancingV2Client");
const DescribeTargetGroupsCommand_1 = require("../commands/DescribeTargetGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeTargetGroupsCommand_1.DescribeTargetGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeTargetGroups(input, ...args);
};
async function* paginateDescribeTargetGroups(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        if (config.client instanceof ElasticLoadBalancingV2_1.ElasticLoadBalancingV2) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ElasticLoadBalancingV2Client_1.ElasticLoadBalancingV2Client) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ElasticLoadBalancingV2 | ElasticLoadBalancingV2Client");
        }
        yield page;
        token = page.NextMarker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeTargetGroups = paginateDescribeTargetGroups;
//# sourceMappingURL=DescribeTargetGroupsPaginator.js.map