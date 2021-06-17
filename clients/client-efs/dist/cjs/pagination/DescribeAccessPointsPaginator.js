"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeAccessPoints = void 0;
const EFS_1 = require("../EFS");
const EFSClient_1 = require("../EFSClient");
const DescribeAccessPointsCommand_1 = require("../commands/DescribeAccessPointsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeAccessPointsCommand_1.DescribeAccessPointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeAccessPoints(input, ...args);
};
async function* paginateDescribeAccessPoints(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof EFS_1.EFS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof EFSClient_1.EFSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected EFS | EFSClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeAccessPoints = paginateDescribeAccessPoints;
//# sourceMappingURL=DescribeAccessPointsPaginator.js.map