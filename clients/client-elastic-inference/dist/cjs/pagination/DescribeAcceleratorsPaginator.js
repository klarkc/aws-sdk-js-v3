"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeAccelerators = void 0;
const ElasticInference_1 = require("../ElasticInference");
const ElasticInferenceClient_1 = require("../ElasticInferenceClient");
const DescribeAcceleratorsCommand_1 = require("../commands/DescribeAcceleratorsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeAcceleratorsCommand_1.DescribeAcceleratorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeAccelerators(input, ...args);
};
async function* paginateDescribeAccelerators(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof ElasticInference_1.ElasticInference) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ElasticInferenceClient_1.ElasticInferenceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ElasticInference | ElasticInferenceClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeAccelerators = paginateDescribeAccelerators;
//# sourceMappingURL=DescribeAcceleratorsPaginator.js.map