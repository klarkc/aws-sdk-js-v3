"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDataIngestionJobs = void 0;
const LookoutEquipment_1 = require("../LookoutEquipment");
const LookoutEquipmentClient_1 = require("../LookoutEquipmentClient");
const ListDataIngestionJobsCommand_1 = require("../commands/ListDataIngestionJobsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDataIngestionJobsCommand_1.ListDataIngestionJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDataIngestionJobs(input, ...args);
};
async function* paginateListDataIngestionJobs(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof LookoutEquipment_1.LookoutEquipment) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LookoutEquipmentClient_1.LookoutEquipmentClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected LookoutEquipment | LookoutEquipmentClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDataIngestionJobs = paginateListDataIngestionJobs;
//# sourceMappingURL=ListDataIngestionJobsPaginator.js.map