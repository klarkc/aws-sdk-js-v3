"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListApplicationVersions = void 0;
const ServerlessApplicationRepository_1 = require("../ServerlessApplicationRepository");
const ServerlessApplicationRepositoryClient_1 = require("../ServerlessApplicationRepositoryClient");
const ListApplicationVersionsCommand_1 = require("../commands/ListApplicationVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListApplicationVersionsCommand_1.ListApplicationVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listApplicationVersions(input, ...args);
};
async function* paginateListApplicationVersions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxItems"] = config.pageSize;
        if (config.client instanceof ServerlessApplicationRepository_1.ServerlessApplicationRepository) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ServerlessApplicationRepositoryClient_1.ServerlessApplicationRepositoryClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ServerlessApplicationRepository | ServerlessApplicationRepositoryClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListApplicationVersions = paginateListApplicationVersions;
//# sourceMappingURL=ListApplicationVersionsPaginator.js.map