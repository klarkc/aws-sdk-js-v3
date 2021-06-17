"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListArtifacts = void 0;
const DeviceFarm_1 = require("../DeviceFarm");
const DeviceFarmClient_1 = require("../DeviceFarmClient");
const ListArtifactsCommand_1 = require("../commands/ListArtifactsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListArtifactsCommand_1.ListArtifactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listArtifacts(input, ...args);
};
async function* paginateListArtifacts(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        if (config.client instanceof DeviceFarm_1.DeviceFarm) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DeviceFarmClient_1.DeviceFarmClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListArtifacts = paginateListArtifacts;
//# sourceMappingURL=ListArtifactsPaginator.js.map