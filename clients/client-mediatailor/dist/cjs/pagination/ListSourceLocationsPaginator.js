"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSourceLocations = void 0;
const MediaTailor_1 = require("../MediaTailor");
const MediaTailorClient_1 = require("../MediaTailorClient");
const ListSourceLocationsCommand_1 = require("../commands/ListSourceLocationsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSourceLocationsCommand_1.ListSourceLocationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSourceLocations(input, ...args);
};
async function* paginateListSourceLocations(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaTailor_1.MediaTailor) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaTailorClient_1.MediaTailorClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaTailor | MediaTailorClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSourceLocations = paginateListSourceLocations;
//# sourceMappingURL=ListSourceLocationsPaginator.js.map