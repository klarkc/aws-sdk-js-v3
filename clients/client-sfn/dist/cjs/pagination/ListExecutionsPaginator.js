"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListExecutions = void 0;
const SFN_1 = require("../SFN");
const SFNClient_1 = require("../SFNClient");
const ListExecutionsCommand_1 = require("../commands/ListExecutionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListExecutionsCommand_1.ListExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listExecutions(input, ...args);
};
async function* paginateListExecutions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SFN_1.SFN) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SFNClient_1.SFNClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SFN | SFNClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListExecutions = paginateListExecutions;
//# sourceMappingURL=ListExecutionsPaginator.js.map