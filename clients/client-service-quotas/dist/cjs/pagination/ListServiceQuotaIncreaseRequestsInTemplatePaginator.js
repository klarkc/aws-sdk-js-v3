"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListServiceQuotaIncreaseRequestsInTemplate = void 0;
const ServiceQuotas_1 = require("../ServiceQuotas");
const ServiceQuotasClient_1 = require("../ServiceQuotasClient");
const ListServiceQuotaIncreaseRequestsInTemplateCommand_1 = require("../commands/ListServiceQuotaIncreaseRequestsInTemplateCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListServiceQuotaIncreaseRequestsInTemplateCommand_1.ListServiceQuotaIncreaseRequestsInTemplateCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listServiceQuotaIncreaseRequestsInTemplate(input, ...args);
};
async function* paginateListServiceQuotaIncreaseRequestsInTemplate(config, input, ...additionalArguments) {
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
exports.paginateListServiceQuotaIncreaseRequestsInTemplate = paginateListServiceQuotaIncreaseRequestsInTemplate;
//# sourceMappingURL=ListServiceQuotaIncreaseRequestsInTemplatePaginator.js.map