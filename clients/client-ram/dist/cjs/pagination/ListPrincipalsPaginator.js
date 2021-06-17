"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPrincipals = void 0;
const RAM_1 = require("../RAM");
const RAMClient_1 = require("../RAMClient");
const ListPrincipalsCommand_1 = require("../commands/ListPrincipalsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPrincipalsCommand_1.ListPrincipalsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPrincipals(input, ...args);
};
async function* paginateListPrincipals(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof RAM_1.RAM) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof RAMClient_1.RAMClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected RAM | RAMClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPrincipals = paginateListPrincipals;
//# sourceMappingURL=ListPrincipalsPaginator.js.map