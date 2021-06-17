"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPlaybackConfigurations = void 0;
const MediaTailor_1 = require("../MediaTailor");
const MediaTailorClient_1 = require("../MediaTailorClient");
const ListPlaybackConfigurationsCommand_1 = require("../commands/ListPlaybackConfigurationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPlaybackConfigurationsCommand_1.ListPlaybackConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPlaybackConfigurations(input, ...args);
};
async function* paginateListPlaybackConfigurations(config, input, ...additionalArguments) {
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
exports.paginateListPlaybackConfigurations = paginateListPlaybackConfigurations;
//# sourceMappingURL=ListPlaybackConfigurationsPaginator.js.map