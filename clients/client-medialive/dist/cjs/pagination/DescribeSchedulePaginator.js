"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeSchedule = void 0;
const MediaLive_1 = require("../MediaLive");
const MediaLiveClient_1 = require("../MediaLiveClient");
const DescribeScheduleCommand_1 = require("../commands/DescribeScheduleCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeScheduleCommand_1.DescribeScheduleCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeSchedule(input, ...args);
};
async function* paginateDescribeSchedule(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaLive_1.MediaLive) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaLiveClient_1.MediaLiveClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeSchedule = paginateDescribeSchedule;
//# sourceMappingURL=DescribeSchedulePaginator.js.map