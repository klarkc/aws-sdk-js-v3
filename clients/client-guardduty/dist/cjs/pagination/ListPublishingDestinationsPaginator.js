"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPublishingDestinations = void 0;
const GuardDuty_1 = require("../GuardDuty");
const GuardDutyClient_1 = require("../GuardDutyClient");
const ListPublishingDestinationsCommand_1 = require("../commands/ListPublishingDestinationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPublishingDestinationsCommand_1.ListPublishingDestinationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPublishingDestinations(input, ...args);
};
async function* paginateListPublishingDestinations(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof GuardDuty_1.GuardDuty) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GuardDutyClient_1.GuardDutyClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPublishingDestinations = paginateListPublishingDestinations;
//# sourceMappingURL=ListPublishingDestinationsPaginator.js.map