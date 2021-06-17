"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListHumanLoops = void 0;
const SageMakerA2IRuntime_1 = require("../SageMakerA2IRuntime");
const SageMakerA2IRuntimeClient_1 = require("../SageMakerA2IRuntimeClient");
const ListHumanLoopsCommand_1 = require("../commands/ListHumanLoopsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListHumanLoopsCommand_1.ListHumanLoopsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listHumanLoops(input, ...args);
};
async function* paginateListHumanLoops(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SageMakerA2IRuntime_1.SageMakerA2IRuntime) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SageMakerA2IRuntimeClient_1.SageMakerA2IRuntimeClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SageMakerA2IRuntime | SageMakerA2IRuntimeClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListHumanLoops = paginateListHumanLoops;
//# sourceMappingURL=ListHumanLoopsPaginator.js.map