"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListClassificationJobs = void 0;
const Macie2_1 = require("../Macie2");
const Macie2Client_1 = require("../Macie2Client");
const ListClassificationJobsCommand_1 = require("../commands/ListClassificationJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListClassificationJobsCommand_1.ListClassificationJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listClassificationJobs(input, ...args);
};
async function* paginateListClassificationJobs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Macie2_1.Macie2) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof Macie2Client_1.Macie2Client) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Macie2 | Macie2Client");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListClassificationJobs = paginateListClassificationJobs;
//# sourceMappingURL=ListClassificationJobsPaginator.js.map