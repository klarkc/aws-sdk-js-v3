"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDatasetEntries = void 0;
const LookoutVision_1 = require("../LookoutVision");
const LookoutVisionClient_1 = require("../LookoutVisionClient");
const ListDatasetEntriesCommand_1 = require("../commands/ListDatasetEntriesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDatasetEntriesCommand_1.ListDatasetEntriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDatasetEntries(input, ...args);
};
async function* paginateListDatasetEntries(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof LookoutVision_1.LookoutVision) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LookoutVisionClient_1.LookoutVisionClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected LookoutVision | LookoutVisionClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDatasetEntries = paginateListDatasetEntries;
//# sourceMappingURL=ListDatasetEntriesPaginator.js.map