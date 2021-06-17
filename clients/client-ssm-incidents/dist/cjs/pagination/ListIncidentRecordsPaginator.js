"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListIncidentRecords = void 0;
const SSMIncidents_1 = require("../SSMIncidents");
const SSMIncidentsClient_1 = require("../SSMIncidentsClient");
const ListIncidentRecordsCommand_1 = require("../commands/ListIncidentRecordsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListIncidentRecordsCommand_1.ListIncidentRecordsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listIncidentRecords(input, ...args);
};
async function* paginateListIncidentRecords(config, input, ...additionalArguments) {
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
exports.paginateListIncidentRecords = paginateListIncidentRecords;
//# sourceMappingURL=ListIncidentRecordsPaginator.js.map