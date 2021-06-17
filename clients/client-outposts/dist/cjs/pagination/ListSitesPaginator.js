"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSites = void 0;
const Outposts_1 = require("../Outposts");
const OutpostsClient_1 = require("../OutpostsClient");
const ListSitesCommand_1 = require("../commands/ListSitesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSitesCommand_1.ListSitesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSites(input, ...args);
};
async function* paginateListSites(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Outposts_1.Outposts) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof OutpostsClient_1.OutpostsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Outposts | OutpostsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSites = paginateListSites;
//# sourceMappingURL=ListSitesPaginator.js.map