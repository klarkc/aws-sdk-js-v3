"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTestGridSessionArtifacts = void 0;
const DeviceFarm_1 = require("../DeviceFarm");
const DeviceFarmClient_1 = require("../DeviceFarmClient");
const ListTestGridSessionArtifactsCommand_1 = require("../commands/ListTestGridSessionArtifactsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTestGridSessionArtifactsCommand_1.ListTestGridSessionArtifactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTestGridSessionArtifacts(input, ...args);
};
async function* paginateListTestGridSessionArtifacts(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResult"] = config.pageSize;
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
exports.paginateListTestGridSessionArtifacts = paginateListTestGridSessionArtifacts;
//# sourceMappingURL=ListTestGridSessionArtifactsPaginator.js.map