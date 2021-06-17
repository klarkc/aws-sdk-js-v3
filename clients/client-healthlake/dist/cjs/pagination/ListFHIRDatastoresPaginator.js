"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFHIRDatastores = void 0;
const HealthLake_1 = require("../HealthLake");
const HealthLakeClient_1 = require("../HealthLakeClient");
const ListFHIRDatastoresCommand_1 = require("../commands/ListFHIRDatastoresCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListFHIRDatastoresCommand_1.ListFHIRDatastoresCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listFHIRDatastores(input, ...args);
};
async function* paginateListFHIRDatastores(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof HealthLake_1.HealthLake) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof HealthLakeClient_1.HealthLakeClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected HealthLake | HealthLakeClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFHIRDatastores = paginateListFHIRDatastores;
//# sourceMappingURL=ListFHIRDatastoresPaginator.js.map