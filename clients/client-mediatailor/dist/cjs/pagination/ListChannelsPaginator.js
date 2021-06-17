"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListChannels = void 0;
const MediaTailor_1 = require("../MediaTailor");
const MediaTailorClient_1 = require("../MediaTailorClient");
const ListChannelsCommand_1 = require("../commands/ListChannelsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListChannelsCommand_1.ListChannelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listChannels(input, ...args);
};
async function* paginateListChannels(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaTailor_1.MediaTailor) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaTailorClient_1.MediaTailorClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaTailor | MediaTailorClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListChannels = paginateListChannels;
//# sourceMappingURL=ListChannelsPaginator.js.map