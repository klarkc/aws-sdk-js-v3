"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListWorkerBlocks = void 0;
const MTurk_1 = require("../MTurk");
const MTurkClient_1 = require("../MTurkClient");
const ListWorkerBlocksCommand_1 = require("../commands/ListWorkerBlocksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListWorkerBlocksCommand_1.ListWorkerBlocksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listWorkerBlocks(input, ...args);
};
async function* paginateListWorkerBlocks(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MTurk_1.MTurk) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MTurkClient_1.MTurkClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MTurk | MTurkClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListWorkerBlocks = paginateListWorkerBlocks;
//# sourceMappingURL=ListWorkerBlocksPaginator.js.map