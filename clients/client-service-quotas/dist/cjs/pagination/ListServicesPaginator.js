"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListServices = void 0;
const ServiceQuotas_1 = require("../ServiceQuotas");
const ServiceQuotasClient_1 = require("../ServiceQuotasClient");
const ListServicesCommand_1 = require("../commands/ListServicesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListServicesCommand_1.ListServicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listServices(input, ...args);
};
async function* paginateListServices(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof ServiceQuotas_1.ServiceQuotas) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ServiceQuotasClient_1.ServiceQuotasClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ServiceQuotas | ServiceQuotasClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListServices = paginateListServices;
//# sourceMappingURL=ListServicesPaginator.js.map