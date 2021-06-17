"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListOperations = void 0;
const Route53Domains_1 = require("../Route53Domains");
const Route53DomainsClient_1 = require("../Route53DomainsClient");
const ListOperationsCommand_1 = require("../commands/ListOperationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListOperationsCommand_1.ListOperationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listOperations(input, ...args);
};
async function* paginateListOperations(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
        if (config.client instanceof Route53Domains_1.Route53Domains) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof Route53DomainsClient_1.Route53DomainsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Route53Domains | Route53DomainsClient");
        }
        yield page;
        token = page.NextPageMarker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListOperations = paginateListOperations;
//# sourceMappingURL=ListOperationsPaginator.js.map