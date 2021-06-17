"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeWorkspaceBundles = void 0;
const WorkSpaces_1 = require("../WorkSpaces");
const WorkSpacesClient_1 = require("../WorkSpacesClient");
const DescribeWorkspaceBundlesCommand_1 = require("../commands/DescribeWorkspaceBundlesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeWorkspaceBundlesCommand_1.DescribeWorkspaceBundlesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeWorkspaceBundles(input, ...args);
};
async function* paginateDescribeWorkspaceBundles(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        if (config.client instanceof WorkSpaces_1.WorkSpaces) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof WorkSpacesClient_1.WorkSpacesClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected WorkSpaces | WorkSpacesClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeWorkspaceBundles = paginateDescribeWorkspaceBundles;
//# sourceMappingURL=DescribeWorkspaceBundlesPaginator.js.map