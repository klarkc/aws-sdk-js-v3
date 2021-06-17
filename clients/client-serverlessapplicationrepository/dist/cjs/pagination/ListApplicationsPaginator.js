"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListApplications = void 0;
const ServerlessApplicationRepository_1 = require("../ServerlessApplicationRepository");
const ServerlessApplicationRepositoryClient_1 = require("../ServerlessApplicationRepositoryClient");
const ListApplicationsCommand_1 = require("../commands/ListApplicationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListApplicationsCommand_1.ListApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listApplications(input, ...args);
};
async function* paginateListApplications(config, input, ...additionalArguments) {
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
exports.paginateListApplications = paginateListApplications;
//# sourceMappingURL=ListApplicationsPaginator.js.map