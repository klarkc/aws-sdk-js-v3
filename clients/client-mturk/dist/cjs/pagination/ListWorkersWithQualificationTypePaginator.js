"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListWorkersWithQualificationType = void 0;
const MTurk_1 = require("../MTurk");
const MTurkClient_1 = require("../MTurkClient");
const ListWorkersWithQualificationTypeCommand_1 = require("../commands/ListWorkersWithQualificationTypeCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListWorkersWithQualificationTypeCommand_1.ListWorkersWithQualificationTypeCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listWorkersWithQualificationType(input, ...args);
};
async function* paginateListWorkersWithQualificationType(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MTurk_1.MTurk) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MTurkClient_1.MTurkClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MTurk | MTurkClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListWorkersWithQualificationType = paginateListWorkersWithQualificationType;
//# sourceMappingURL=ListWorkersWithQualificationTypePaginator.js.map