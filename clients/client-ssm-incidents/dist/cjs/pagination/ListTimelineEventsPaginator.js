"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTimelineEvents = void 0;
const SSMIncidents_1 = require("../SSMIncidents");
const SSMIncidentsClient_1 = require("../SSMIncidentsClient");
const ListTimelineEventsCommand_1 = require("../commands/ListTimelineEventsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTimelineEventsCommand_1.ListTimelineEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTimelineEvents(input, ...args);
};
async function* paginateListTimelineEvents(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSMIncidents_1.SSMIncidents) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSMIncidentsClient_1.SSMIncidentsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSMIncidents | SSMIncidentsClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListTimelineEvents = paginateListTimelineEvents;
//# sourceMappingURL=ListTimelineEventsPaginator.js.map