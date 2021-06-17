"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeSourceServers = void 0;
const Mgn_1 = require("../Mgn");
const MgnClient_1 = require("../MgnClient");
const DescribeSourceServersCommand_1 = require("../commands/DescribeSourceServersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeSourceServersCommand_1.DescribeSourceServersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeSourceServers(input, ...args);
};
async function* paginateDescribeSourceServers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Mgn_1.Mgn) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MgnClient_1.MgnClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Mgn | MgnClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeSourceServers = paginateDescribeSourceServers;
//# sourceMappingURL=DescribeSourceServersPaginator.js.map