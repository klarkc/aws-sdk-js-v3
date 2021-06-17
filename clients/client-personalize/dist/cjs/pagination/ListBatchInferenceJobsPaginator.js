"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListBatchInferenceJobs = void 0;
const Personalize_1 = require("../Personalize");
const PersonalizeClient_1 = require("../PersonalizeClient");
const ListBatchInferenceJobsCommand_1 = require("../commands/ListBatchInferenceJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListBatchInferenceJobsCommand_1.ListBatchInferenceJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listBatchInferenceJobs(input, ...args);
};
async function* paginateListBatchInferenceJobs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Personalize_1.Personalize) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof PersonalizeClient_1.PersonalizeClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Personalize | PersonalizeClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListBatchInferenceJobs = paginateListBatchInferenceJobs;
//# sourceMappingURL=ListBatchInferenceJobsPaginator.js.map