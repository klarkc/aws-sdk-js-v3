"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListJobs = void 0;
const DataExchange_1 = require("../DataExchange");
const DataExchangeClient_1 = require("../DataExchangeClient");
const ListJobsCommand_1 = require("../commands/ListJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListJobsCommand_1.ListJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listJobs(input, ...args);
};
async function* paginateListJobs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof DataExchange_1.DataExchange) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DataExchangeClient_1.DataExchangeClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DataExchange | DataExchangeClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListJobs = paginateListJobs;
//# sourceMappingURL=ListJobsPaginator.js.map