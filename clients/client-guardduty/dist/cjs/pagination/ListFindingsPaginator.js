"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFindings = void 0;
const GuardDuty_1 = require("../GuardDuty");
const GuardDutyClient_1 = require("../GuardDutyClient");
const ListFindingsCommand_1 = require("../commands/ListFindingsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListFindingsCommand_1.ListFindingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listFindings(input, ...args);
};
async function* paginateListFindings(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof GuardDuty_1.GuardDuty) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GuardDutyClient_1.GuardDutyClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFindings = paginateListFindings;
//# sourceMappingURL=ListFindingsPaginator.js.map