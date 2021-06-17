"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEnabledProductsForImport = void 0;
const SecurityHub_1 = require("../SecurityHub");
const SecurityHubClient_1 = require("../SecurityHubClient");
const ListEnabledProductsForImportCommand_1 = require("../commands/ListEnabledProductsForImportCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListEnabledProductsForImportCommand_1.ListEnabledProductsForImportCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listEnabledProductsForImport(input, ...args);
};
async function* paginateListEnabledProductsForImport(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SecurityHub_1.SecurityHub) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SecurityHubClient_1.SecurityHubClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListEnabledProductsForImport = paginateListEnabledProductsForImport;
//# sourceMappingURL=ListEnabledProductsForImportPaginator.js.map