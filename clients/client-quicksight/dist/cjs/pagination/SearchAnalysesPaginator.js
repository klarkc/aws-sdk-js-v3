"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateSearchAnalyses = void 0;
const QuickSight_1 = require("../QuickSight");
const QuickSightClient_1 = require("../QuickSightClient");
const SearchAnalysesCommand_1 = require("../commands/SearchAnalysesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new SearchAnalysesCommand_1.SearchAnalysesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.searchAnalyses(input, ...args);
};
async function* paginateSearchAnalyses(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof QuickSight_1.QuickSight) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof QuickSightClient_1.QuickSightClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected QuickSight | QuickSightClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateSearchAnalyses = paginateSearchAnalyses;
//# sourceMappingURL=SearchAnalysesPaginator.js.map