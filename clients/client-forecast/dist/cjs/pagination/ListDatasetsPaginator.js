"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDatasets = void 0;
const Forecast_1 = require("../Forecast");
const ForecastClient_1 = require("../ForecastClient");
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
        if (config.client instanceof Forecast_1.Forecast) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ForecastClient_1.ForecastClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Forecast | ForecastClient");
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