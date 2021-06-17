"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDeadLetterSourceQueues = void 0;
const SQS_1 = require("../SQS");
const SQSClient_1 = require("../SQSClient");
const ListDeadLetterSourceQueuesCommand_1 = require("../commands/ListDeadLetterSourceQueuesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDeadLetterSourceQueuesCommand_1.ListDeadLetterSourceQueuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDeadLetterSourceQueues(input, ...args);
};
async function* paginateListDeadLetterSourceQueues(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SQS_1.SQS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SQSClient_1.SQSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SQS | SQSClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDeadLetterSourceQueues = paginateListDeadLetterSourceQueues;
//# sourceMappingURL=ListDeadLetterSourceQueuesPaginator.js.map