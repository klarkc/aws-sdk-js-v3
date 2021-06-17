"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListJobsByPipeline = void 0;
const ElasticTranscoder_1 = require("../ElasticTranscoder");
const ElasticTranscoderClient_1 = require("../ElasticTranscoderClient");
const ListJobsByPipelineCommand_1 = require("../commands/ListJobsByPipelineCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListJobsByPipelineCommand_1.ListJobsByPipelineCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listJobsByPipeline(input, ...args);
};
async function* paginateListJobsByPipeline(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.PageToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.PageToken = token;
        if (config.client instanceof ElasticTranscoder_1.ElasticTranscoder) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ElasticTranscoderClient_1.ElasticTranscoderClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ElasticTranscoder | ElasticTranscoderClient");
        }
        yield page;
        token = page.NextPageToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListJobsByPipeline = paginateListJobsByPipeline;
//# sourceMappingURL=ListJobsByPipelinePaginator.js.map