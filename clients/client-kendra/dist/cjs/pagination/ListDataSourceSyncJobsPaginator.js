"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDataSourceSyncJobs = void 0;
const Kendra_1 = require("../Kendra");
const KendraClient_1 = require("../KendraClient");
const ListDataSourceSyncJobsCommand_1 = require("../commands/ListDataSourceSyncJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDataSourceSyncJobsCommand_1.ListDataSourceSyncJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDataSourceSyncJobs(input, ...args);
};
async function* paginateListDataSourceSyncJobs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Kendra_1.Kendra) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof KendraClient_1.KendraClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Kendra | KendraClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDataSourceSyncJobs = paginateListDataSourceSyncJobs;
//# sourceMappingURL=ListDataSourceSyncJobsPaginator.js.map