"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListQueueQuickConnects = void 0;
const Connect_1 = require("../Connect");
const ConnectClient_1 = require("../ConnectClient");
const ListQueueQuickConnectsCommand_1 = require("../commands/ListQueueQuickConnectsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListQueueQuickConnectsCommand_1.ListQueueQuickConnectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listQueueQuickConnects(input, ...args);
};
async function* paginateListQueueQuickConnects(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Connect_1.Connect) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ConnectClient_1.ConnectClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Connect | ConnectClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListQueueQuickConnects = paginateListQueueQuickConnects;
//# sourceMappingURL=ListQueueQuickConnectsPaginator.js.map