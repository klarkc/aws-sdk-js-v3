"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeFileSystemAliases = void 0;
const FSx_1 = require("../FSx");
const FSxClient_1 = require("../FSxClient");
const DescribeFileSystemAliasesCommand_1 = require("../commands/DescribeFileSystemAliasesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeFileSystemAliasesCommand_1.DescribeFileSystemAliasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeFileSystemAliases(input, ...args);
};
async function* paginateDescribeFileSystemAliases(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof FSx_1.FSx) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof FSxClient_1.FSxClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected FSx | FSxClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeFileSystemAliases = paginateDescribeFileSystemAliases;
//# sourceMappingURL=DescribeFileSystemAliasesPaginator.js.map