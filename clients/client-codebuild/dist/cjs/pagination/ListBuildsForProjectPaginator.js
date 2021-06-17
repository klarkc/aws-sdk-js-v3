"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListBuildsForProject = void 0;
const CodeBuild_1 = require("../CodeBuild");
const CodeBuildClient_1 = require("../CodeBuildClient");
const ListBuildsForProjectCommand_1 = require("../commands/ListBuildsForProjectCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListBuildsForProjectCommand_1.ListBuildsForProjectCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listBuildsForProject(input, ...args);
};
async function* paginateListBuildsForProject(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
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
exports.paginateListBuildsForProject = paginateListBuildsForProject;
//# sourceMappingURL=ListBuildsForProjectPaginator.js.map