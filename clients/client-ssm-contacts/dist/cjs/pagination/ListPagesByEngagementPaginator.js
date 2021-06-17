"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPagesByEngagement = void 0;
const SSMContacts_1 = require("../SSMContacts");
const SSMContactsClient_1 = require("../SSMContactsClient");
const ListPagesByEngagementCommand_1 = require("../commands/ListPagesByEngagementCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPagesByEngagementCommand_1.ListPagesByEngagementCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPagesByEngagement(input, ...args);
};
async function* paginateListPagesByEngagement(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SSMContacts_1.SSMContacts) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSMContactsClient_1.SSMContactsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSMContacts | SSMContactsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPagesByEngagement = paginateListPagesByEngagement;
//# sourceMappingURL=ListPagesByEngagementPaginator.js.map