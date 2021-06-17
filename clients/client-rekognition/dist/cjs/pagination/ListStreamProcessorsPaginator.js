"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStreamProcessors = void 0;
const Rekognition_1 = require("../Rekognition");
const RekognitionClient_1 = require("../RekognitionClient");
const ListStreamProcessorsCommand_1 = require("../commands/ListStreamProcessorsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListStreamProcessorsCommand_1.ListStreamProcessorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listStreamProcessors(input, ...args);
};
async function* paginateListStreamProcessors(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Rekognition_1.Rekognition) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof RekognitionClient_1.RekognitionClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Rekognition | RekognitionClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListStreamProcessors = paginateListStreamProcessors;
//# sourceMappingURL=ListStreamProcessorsPaginator.js.map