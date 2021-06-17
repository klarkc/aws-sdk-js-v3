"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCostCategoryDefinitions = void 0;
const CostExplorer_1 = require("../CostExplorer");
const CostExplorerClient_1 = require("../CostExplorerClient");
const ListCostCategoryDefinitionsCommand_1 = require("../commands/ListCostCategoryDefinitionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListCostCategoryDefinitionsCommand_1.ListCostCategoryDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listCostCategoryDefinitions(input, ...args);
};
async function* paginateListCostCategoryDefinitions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CostExplorer_1.CostExplorer) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CostExplorerClient_1.CostExplorerClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CostExplorer | CostExplorerClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListCostCategoryDefinitions = paginateListCostCategoryDefinitions;
//# sourceMappingURL=ListCostCategoryDefinitionsPaginator.js.map