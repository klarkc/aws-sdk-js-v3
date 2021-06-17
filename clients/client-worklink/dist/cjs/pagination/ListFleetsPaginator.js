"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFleets = void 0;
const WorkLink_1 = require("../WorkLink");
const WorkLinkClient_1 = require("../WorkLinkClient");
const ListFleetsCommand_1 = require("../commands/ListFleetsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListFleetsCommand_1.ListFleetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listFleets(input, ...args);
};
async function* paginateListFleets(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof WorkLink_1.WorkLink) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof WorkLinkClient_1.WorkLinkClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected WorkLink | WorkLinkClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFleets = paginateListFleets;
//# sourceMappingURL=ListFleetsPaginator.js.map