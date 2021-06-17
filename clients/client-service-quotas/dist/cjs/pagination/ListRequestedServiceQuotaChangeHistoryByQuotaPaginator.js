"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListRequestedServiceQuotaChangeHistoryByQuota = void 0;
const ServiceQuotas_1 = require("../ServiceQuotas");
const ServiceQuotasClient_1 = require("../ServiceQuotasClient");
const ListRequestedServiceQuotaChangeHistoryByQuotaCommand_1 = require("../commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListRequestedServiceQuotaChangeHistoryByQuotaCommand_1.ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listRequestedServiceQuotaChangeHistoryByQuota(input, ...args);
};
async function* paginateListRequestedServiceQuotaChangeHistoryByQuota(config, input, ...additionalArguments) {
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
exports.paginateListRequestedServiceQuotaChangeHistoryByQuota = paginateListRequestedServiceQuotaChangeHistoryByQuota;
//# sourceMappingURL=ListRequestedServiceQuotaChangeHistoryByQuotaPaginator.js.map