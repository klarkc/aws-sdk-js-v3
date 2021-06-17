"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSignalingChannels = void 0;
const KinesisVideo_1 = require("../KinesisVideo");
const KinesisVideoClient_1 = require("../KinesisVideoClient");
const ListSignalingChannelsCommand_1 = require("../commands/ListSignalingChannelsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSignalingChannelsCommand_1.ListSignalingChannelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSignalingChannels(input, ...args);
};
async function* paginateListSignalingChannels(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof KinesisVideo_1.KinesisVideo) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof KinesisVideoClient_1.KinesisVideoClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected KinesisVideo | KinesisVideoClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSignalingChannels = paginateListSignalingChannels;
//# sourceMappingURL=ListSignalingChannelsPaginator.js.map