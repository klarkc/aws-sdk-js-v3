"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeMLModels = void 0;
const MachineLearning_1 = require("../MachineLearning");
const MachineLearningClient_1 = require("../MachineLearningClient");
const DescribeMLModelsCommand_1 = require("../commands/DescribeMLModelsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeMLModelsCommand_1.DescribeMLModelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeMLModels(input, ...args);
};
async function* paginateDescribeMLModels(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof MachineLearning_1.MachineLearning) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MachineLearningClient_1.MachineLearningClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MachineLearning | MachineLearningClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeMLModels = paginateDescribeMLModels;
//# sourceMappingURL=DescribeMLModelsPaginator.js.map