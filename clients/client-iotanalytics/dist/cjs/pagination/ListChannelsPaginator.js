"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListChannels = void 0;
const IoTAnalytics_1 = require("../IoTAnalytics");
const IoTAnalyticsClient_1 = require("../IoTAnalyticsClient");
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
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof IoTAnalytics_1.IoTAnalytics) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IoTAnalyticsClient_1.IoTAnalyticsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IoTAnalytics | IoTAnalyticsClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListChannels = paginateListChannels;
//# sourceMappingURL=ListChannelsPaginator.js.map