"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetCommentsForPullRequest = void 0;
const CodeCommit_1 = require("../CodeCommit");
const CodeCommitClient_1 = require("../CodeCommitClient");
const GetCommentsForPullRequestCommand_1 = require("../commands/GetCommentsForPullRequestCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetCommentsForPullRequestCommand_1.GetCommentsForPullRequestCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getCommentsForPullRequest(input, ...args);
};
async function* paginateGetCommentsForPullRequest(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof CodeCommit_1.CodeCommit) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeCommitClient_1.CodeCommitClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetCommentsForPullRequest = paginateGetCommentsForPullRequest;
//# sourceMappingURL=GetCommentsForPullRequestPaginator.js.map