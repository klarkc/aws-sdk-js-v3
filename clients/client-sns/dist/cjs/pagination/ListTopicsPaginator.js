"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTopics = void 0;
const SNS_1 = require("../SNS");
const SNSClient_1 = require("../SNSClient");
const ListTopicsCommand_1 = require("../commands/ListTopicsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTopicsCommand_1.ListTopicsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTopics(input, ...args);
};
async function* paginateListTopics(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        if (config.client instanceof SNS_1.SNS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SNSClient_1.SNSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SNS | SNSClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListTopics = paginateListTopics;
//# sourceMappingURL=ListTopicsPaginator.js.map