"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListWorkforces = void 0;
const SageMaker_1 = require("../SageMaker");
const SageMakerClient_1 = require("../SageMakerClient");
const ListWorkforcesCommand_1 = require("../commands/ListWorkforcesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListWorkforcesCommand_1.ListWorkforcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listWorkforces(input, ...args);
};
async function* paginateListWorkforces(config, input, ...additionalArguments) {
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
exports.paginateListWorkforces = paginateListWorkforces;
//# sourceMappingURL=ListWorkforcesPaginator.js.map