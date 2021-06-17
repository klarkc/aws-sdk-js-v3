"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListResponsePlans = void 0;
const SSMIncidents_1 = require("../SSMIncidents");
const SSMIncidentsClient_1 = require("../SSMIncidentsClient");
const ListResponsePlansCommand_1 = require("../commands/ListResponsePlansCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListResponsePlansCommand_1.ListResponsePlansCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listResponsePlans(input, ...args);
};
async function* paginateListResponsePlans(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SSMIncidents_1.SSMIncidents) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSMIncidentsClient_1.SSMIncidentsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSMIncidents | SSMIncidentsClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListResponsePlans = paginateListResponsePlans;
//# sourceMappingURL=ListResponsePlansPaginator.js.map