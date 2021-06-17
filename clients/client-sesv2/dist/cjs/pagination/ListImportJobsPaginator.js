"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListImportJobs = void 0;
const SESv2_1 = require("../SESv2");
const SESv2Client_1 = require("../SESv2Client");
const ListImportJobsCommand_1 = require("../commands/ListImportJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListImportJobsCommand_1.ListImportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listImportJobs(input, ...args);
};
async function* paginateListImportJobs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["PageSize"] = config.pageSize;
        if (config.client instanceof SESv2_1.SESv2) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SESv2Client_1.SESv2Client) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SESv2 | SESv2Client");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListImportJobs = paginateListImportJobs;
//# sourceMappingURL=ListImportJobsPaginator.js.map