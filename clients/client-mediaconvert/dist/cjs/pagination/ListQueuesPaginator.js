"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListQueues = void 0;
const MediaConvert_1 = require("../MediaConvert");
const MediaConvertClient_1 = require("../MediaConvertClient");
const ListQueuesCommand_1 = require("../commands/ListQueuesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListQueuesCommand_1.ListQueuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listQueues(input, ...args);
};
async function* paginateListQueues(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaConvert_1.MediaConvert) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaConvertClient_1.MediaConvertClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaConvert | MediaConvertClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListQueues = paginateListQueues;
//# sourceMappingURL=ListQueuesPaginator.js.map