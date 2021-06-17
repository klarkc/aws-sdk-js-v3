"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeFileSystems = void 0;
const EFS_1 = require("../EFS");
const EFSClient_1 = require("../EFSClient");
const DescribeFileSystemsCommand_1 = require("../commands/DescribeFileSystemsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeFileSystemsCommand_1.DescribeFileSystemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeFileSystems(input, ...args);
};
async function* paginateDescribeFileSystems(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
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
        token = page.NextMarker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeFileSystems = paginateDescribeFileSystems;
//# sourceMappingURL=DescribeFileSystemsPaginator.js.map