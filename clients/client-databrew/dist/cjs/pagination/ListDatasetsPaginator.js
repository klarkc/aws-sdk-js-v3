"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDatasets = void 0;
const DataBrew_1 = require("../DataBrew");
const DataBrewClient_1 = require("../DataBrewClient");
const ListDatasetsCommand_1 = require("../commands/ListDatasetsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDatasetsCommand_1.ListDatasetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDatasets(input, ...args);
};
async function* paginateListDatasets(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof DataBrew_1.DataBrew) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DataBrewClient_1.DataBrewClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DataBrew | DataBrewClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDatasets = paginateListDatasets;
//# sourceMappingURL=ListDatasetsPaginator.js.map