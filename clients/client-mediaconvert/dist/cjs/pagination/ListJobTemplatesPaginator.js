"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListJobTemplates = void 0;
const MediaConvert_1 = require("../MediaConvert");
const MediaConvertClient_1 = require("../MediaConvertClient");
const ListJobTemplatesCommand_1 = require("../commands/ListJobTemplatesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListJobTemplatesCommand_1.ListJobTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listJobTemplates(input, ...args);
};
async function* paginateListJobTemplates(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaConvert_1.MediaConvert) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaConvertClient_1.MediaConvertClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaConvert | MediaConvertClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListJobTemplates = paginateListJobTemplates;
//# sourceMappingURL=ListJobTemplatesPaginator.js.map