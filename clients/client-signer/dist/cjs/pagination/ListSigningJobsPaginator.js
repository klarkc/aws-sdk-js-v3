"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSigningJobs = void 0;
const Signer_1 = require("../Signer");
const SignerClient_1 = require("../SignerClient");
const ListSigningJobsCommand_1 = require("../commands/ListSigningJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSigningJobsCommand_1.ListSigningJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSigningJobs(input, ...args);
};
async function* paginateListSigningJobs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Signer_1.Signer) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SignerClient_1.SignerClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Signer | SignerClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSigningJobs = paginateListSigningJobs;
//# sourceMappingURL=ListSigningJobsPaginator.js.map