"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeLoadBalancers = void 0;
const ElasticLoadBalancing_1 = require("../ElasticLoadBalancing");
const ElasticLoadBalancingClient_1 = require("../ElasticLoadBalancingClient");
const DescribeLoadBalancersCommand_1 = require("../commands/DescribeLoadBalancersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeLoadBalancersCommand_1.DescribeLoadBalancersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeLoadBalancers(input, ...args);
};
async function* paginateDescribeLoadBalancers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        if (config.client instanceof ElasticLoadBalancing_1.ElasticLoadBalancing) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ElasticLoadBalancingClient_1.ElasticLoadBalancingClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ElasticLoadBalancing | ElasticLoadBalancingClient");
        }
        yield page;
        token = page.NextMarker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeLoadBalancers = paginateDescribeLoadBalancers;
//# sourceMappingURL=DescribeLoadBalancersPaginator.js.map