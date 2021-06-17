"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetSavingsPlansCoverage = void 0;
const CostExplorer_1 = require("../CostExplorer");
const CostExplorerClient_1 = require("../CostExplorerClient");
const GetSavingsPlansCoverageCommand_1 = require("../commands/GetSavingsPlansCoverageCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetSavingsPlansCoverageCommand_1.GetSavingsPlansCoverageCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getSavingsPlansCoverage(input, ...args);
};
async function* paginateGetSavingsPlansCoverage(config, input, ...additionalArguments) {
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
exports.paginateGetSavingsPlansCoverage = paginateGetSavingsPlansCoverage;
//# sourceMappingURL=GetSavingsPlansCoveragePaginator.js.map