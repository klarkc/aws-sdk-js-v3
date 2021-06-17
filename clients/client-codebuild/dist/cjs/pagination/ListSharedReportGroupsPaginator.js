"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSharedReportGroups = void 0;
const CodeBuild_1 = require("../CodeBuild");
const CodeBuildClient_1 = require("../CodeBuildClient");
const ListSharedReportGroupsCommand_1 = require("../commands/ListSharedReportGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSharedReportGroupsCommand_1.ListSharedReportGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSharedReportGroups(input, ...args);
};
async function* paginateListSharedReportGroups(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof CodeBuild_1.CodeBuild) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeBuildClient_1.CodeBuildClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSharedReportGroups = paginateListSharedReportGroups;
//# sourceMappingURL=ListSharedReportGroupsPaginator.js.map