"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListContacts = void 0;
const GroundStation_1 = require("../GroundStation");
const GroundStationClient_1 = require("../GroundStationClient");
const ListContactsCommand_1 = require("../commands/ListContactsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListContactsCommand_1.ListContactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listContacts(input, ...args);
};
async function* paginateListContacts(config, input, ...additionalArguments) {
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
exports.paginateListContacts = paginateListContacts;
//# sourceMappingURL=ListContactsPaginator.js.map