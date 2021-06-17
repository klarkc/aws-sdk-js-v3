"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListReportsForReportGroup = void 0;
const CodeBuild_1 = require("../CodeBuild");
const CodeBuildClient_1 = require("../CodeBuildClient");
const ListReportsForReportGroupCommand_1 = require("../commands/ListReportsForReportGroupCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListReportsForReportGroupCommand_1.ListReportsForReportGroupCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listReportsForReportGroup(input, ...args);
};
async function* paginateListReportsForReportGroup(config, input, ...additionalArguments) {
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
exports.paginateListReportsForReportGroup = paginateListReportsForReportGroup;
//# sourceMappingURL=ListReportsForReportGroupPaginator.js.map