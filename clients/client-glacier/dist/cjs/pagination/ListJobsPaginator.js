"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListJobs = void 0;
const Glacier_1 = require("../Glacier");
const GlacierClient_1 = require("../GlacierClient");
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
    // ToDo: replace with actual type instead of typeof input.marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.marker = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof Glacier_1.Glacier) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GlacierClient_1.GlacierClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Glacier | GlacierClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListJobs = paginateListJobs;
//# sourceMappingURL=ListJobsPaginator.js.map