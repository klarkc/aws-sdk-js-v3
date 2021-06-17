"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeServers = void 0;
const OpsWorksCM_1 = require("../OpsWorksCM");
const OpsWorksCMClient_1 = require("../OpsWorksCMClient");
const DescribeServersCommand_1 = require("../commands/DescribeServersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeServersCommand_1.DescribeServersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeServers(input, ...args);
};
async function* paginateDescribeServers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof OpsWorksCM_1.OpsWorksCM) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof OpsWorksCMClient_1.OpsWorksCMClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected OpsWorksCM | OpsWorksCMClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeServers = paginateDescribeServers;
//# sourceMappingURL=DescribeServersPaginator.js.map