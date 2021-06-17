"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListWorkloadShares = void 0;
const WellArchitected_1 = require("../WellArchitected");
const WellArchitectedClient_1 = require("../WellArchitectedClient");
const ListWorkloadSharesCommand_1 = require("../commands/ListWorkloadSharesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListWorkloadSharesCommand_1.ListWorkloadSharesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listWorkloadShares(input, ...args);
};
async function* paginateListWorkloadShares(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof WellArchitected_1.WellArchitected) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof WellArchitectedClient_1.WellArchitectedClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected WellArchitected | WellArchitectedClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListWorkloadShares = paginateListWorkloadShares;
//# sourceMappingURL=ListWorkloadSharesPaginator.js.map