"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAlgorithms = void 0;
const SageMaker_1 = require("../SageMaker");
const SageMakerClient_1 = require("../SageMakerClient");
const ListAlgorithmsCommand_1 = require("../commands/ListAlgorithmsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAlgorithmsCommand_1.ListAlgorithmsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAlgorithms(input, ...args);
};
async function* paginateListAlgorithms(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SageMaker_1.SageMaker) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SageMakerClient_1.SageMakerClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SageMaker | SageMakerClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAlgorithms = paginateListAlgorithms;
//# sourceMappingURL=ListAlgorithmsPaginator.js.map