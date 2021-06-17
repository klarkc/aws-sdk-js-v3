"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSatellites = void 0;
const GroundStation_1 = require("../GroundStation");
const GroundStationClient_1 = require("../GroundStationClient");
const ListSatellitesCommand_1 = require("../commands/ListSatellitesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSatellitesCommand_1.ListSatellitesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSatellites(input, ...args);
};
async function* paginateListSatellites(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof GroundStation_1.GroundStation) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GroundStationClient_1.GroundStationClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected GroundStation | GroundStationClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSatellites = paginateListSatellites;
//# sourceMappingURL=ListSatellitesPaginator.js.map