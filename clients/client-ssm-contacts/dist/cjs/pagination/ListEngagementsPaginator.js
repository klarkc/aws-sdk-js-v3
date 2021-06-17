"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEngagements = void 0;
const SSMContacts_1 = require("../SSMContacts");
const SSMContactsClient_1 = require("../SSMContactsClient");
const ListEngagementsCommand_1 = require("../commands/ListEngagementsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListEngagementsCommand_1.ListEngagementsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listEngagements(input, ...args);
};
async function* paginateListEngagements(config, input, ...additionalArguments) {
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
exports.paginateListEngagements = paginateListEngagements;
//# sourceMappingURL=ListEngagementsPaginator.js.map