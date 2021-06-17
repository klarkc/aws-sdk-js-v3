"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFleets = void 0;
const RoboMaker_1 = require("../RoboMaker");
const RoboMakerClient_1 = require("../RoboMakerClient");
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
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof RoboMaker_1.RoboMaker) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof RoboMakerClient_1.RoboMakerClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListFleets = paginateListFleets;
//# sourceMappingURL=ListFleetsPaginator.js.map