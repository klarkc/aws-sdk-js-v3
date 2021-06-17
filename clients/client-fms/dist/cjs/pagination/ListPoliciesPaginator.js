"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPolicies = void 0;
const FMS_1 = require("../FMS");
const FMSClient_1 = require("../FMSClient");
const ListPoliciesCommand_1 = require("../commands/ListPoliciesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPoliciesCommand_1.ListPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPolicies(input, ...args);
};
async function* paginateListPolicies(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof FMS_1.FMS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof FMSClient_1.FMSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected FMS | FMSClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPolicies = paginateListPolicies;
//# sourceMappingURL=ListPoliciesPaginator.js.map