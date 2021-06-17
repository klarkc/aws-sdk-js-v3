"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListProfilingGroups = void 0;
const CodeGuruProfiler_1 = require("../CodeGuruProfiler");
const CodeGuruProfilerClient_1 = require("../CodeGuruProfilerClient");
const ListProfilingGroupsCommand_1 = require("../commands/ListProfilingGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListProfilingGroupsCommand_1.ListProfilingGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listProfilingGroups(input, ...args);
};
async function* paginateListProfilingGroups(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof CodeGuruProfiler_1.CodeGuruProfiler) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodeGuruProfilerClient_1.CodeGuruProfilerClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodeGuruProfiler | CodeGuruProfilerClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListProfilingGroups = paginateListProfilingGroups;
//# sourceMappingURL=ListProfilingGroupsPaginator.js.map