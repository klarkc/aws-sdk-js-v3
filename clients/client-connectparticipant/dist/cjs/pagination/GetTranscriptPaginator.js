"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetTranscript = void 0;
const ConnectParticipant_1 = require("../ConnectParticipant");
const ConnectParticipantClient_1 = require("../ConnectParticipantClient");
const GetTranscriptCommand_1 = require("../commands/GetTranscriptCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetTranscriptCommand_1.GetTranscriptCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getTranscript(input, ...args);
};
async function* paginateGetTranscript(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof ConnectParticipant_1.ConnectParticipant) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ConnectParticipantClient_1.ConnectParticipantClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ConnectParticipant | ConnectParticipantClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetTranscript = paginateGetTranscript;
//# sourceMappingURL=GetTranscriptPaginator.js.map