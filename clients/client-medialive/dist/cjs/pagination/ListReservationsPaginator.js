"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListReservations = void 0;
const MediaLive_1 = require("../MediaLive");
const MediaLiveClient_1 = require("../MediaLiveClient");
const ListReservationsCommand_1 = require("../commands/ListReservationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListReservationsCommand_1.ListReservationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listReservations(input, ...args);
};
async function* paginateListReservations(config, input, ...additionalArguments) {
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
exports.paginateListReservations = paginateListReservations;
//# sourceMappingURL=ListReservationsPaginator.js.map