"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListVocabularies = void 0;
const Transcribe_1 = require("../Transcribe");
const TranscribeClient_1 = require("../TranscribeClient");
const ListVocabulariesCommand_1 = require("../commands/ListVocabulariesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListVocabulariesCommand_1.ListVocabulariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listVocabularies(input, ...args);
};
async function* paginateListVocabularies(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Transcribe_1.Transcribe) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof TranscribeClient_1.TranscribeClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Transcribe | TranscribeClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListVocabularies = paginateListVocabularies;
//# sourceMappingURL=ListVocabulariesPaginator.js.map