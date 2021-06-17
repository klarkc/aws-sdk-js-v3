"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPipelines = void 0;
const DataPipeline_1 = require("../DataPipeline");
const DataPipelineClient_1 = require("../DataPipelineClient");
const ListPipelinesCommand_1 = require("../commands/ListPipelinesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPipelinesCommand_1.ListPipelinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPipelines(input, ...args);
};
async function* paginateListPipelines(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.marker = token;
        if (config.client instanceof DataPipeline_1.DataPipeline) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DataPipelineClient_1.DataPipelineClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DataPipeline | DataPipelineClient");
        }
        yield page;
        token = page.marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPipelines = paginateListPipelines;
//# sourceMappingURL=ListPipelinesPaginator.js.map