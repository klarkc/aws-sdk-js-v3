"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeWorkspaces = void 0;
const WorkSpaces_1 = require("../WorkSpaces");
const WorkSpacesClient_1 = require("../WorkSpacesClient");
const DescribeWorkspacesCommand_1 = require("../commands/DescribeWorkspacesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeWorkspacesCommand_1.DescribeWorkspacesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeWorkspaces(input, ...args);
};
async function* paginateDescribeWorkspaces(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["Limit"] = config.pageSize;
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
exports.paginateDescribeWorkspaces = paginateDescribeWorkspaces;
//# sourceMappingURL=DescribeWorkspacesPaginator.js.map