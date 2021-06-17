"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListMailboxExportJobs = void 0;
const WorkMail_1 = require("../WorkMail");
const WorkMailClient_1 = require("../WorkMailClient");
const ListMailboxExportJobsCommand_1 = require("../commands/ListMailboxExportJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListMailboxExportJobsCommand_1.ListMailboxExportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listMailboxExportJobs(input, ...args);
};
async function* paginateListMailboxExportJobs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof WorkMail_1.WorkMail) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof WorkMailClient_1.WorkMailClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected WorkMail | WorkMailClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListMailboxExportJobs = paginateListMailboxExportJobs;
//# sourceMappingURL=ListMailboxExportJobsPaginator.js.map