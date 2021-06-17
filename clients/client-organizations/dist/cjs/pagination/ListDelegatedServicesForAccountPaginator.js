"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDelegatedServicesForAccount = void 0;
const Organizations_1 = require("../Organizations");
const OrganizationsClient_1 = require("../OrganizationsClient");
const ListDelegatedServicesForAccountCommand_1 = require("../commands/ListDelegatedServicesForAccountCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDelegatedServicesForAccountCommand_1.ListDelegatedServicesForAccountCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDelegatedServicesForAccount(input, ...args);
};
async function* paginateListDelegatedServicesForAccount(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Organizations_1.Organizations) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof OrganizationsClient_1.OrganizationsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Organizations | OrganizationsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDelegatedServicesForAccount = paginateListDelegatedServicesForAccount;
//# sourceMappingURL=ListDelegatedServicesForAccountPaginator.js.map