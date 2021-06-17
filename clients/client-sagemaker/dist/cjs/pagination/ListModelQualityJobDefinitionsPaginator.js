"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListModelQualityJobDefinitions = void 0;
const SageMaker_1 = require("../SageMaker");
const SageMakerClient_1 = require("../SageMakerClient");
const ListModelQualityJobDefinitionsCommand_1 = require("../commands/ListModelQualityJobDefinitionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListModelQualityJobDefinitionsCommand_1.ListModelQualityJobDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listModelQualityJobDefinitions(input, ...args);
};
async function* paginateListModelQualityJobDefinitions(config, input, ...additionalArguments) {
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
exports.paginateListModelQualityJobDefinitions = paginateListModelQualityJobDefinitions;
//# sourceMappingURL=ListModelQualityJobDefinitionsPaginator.js.map