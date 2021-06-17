"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSuites = void 0;
const DeviceFarm_1 = require("../DeviceFarm");
const DeviceFarmClient_1 = require("../DeviceFarmClient");
const ListSuitesCommand_1 = require("../commands/ListSuitesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSuitesCommand_1.ListSuitesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSuites(input, ...args);
};
async function* paginateListSuites(config, input, ...additionalArguments) {
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
exports.paginateListSuites = paginateListSuites;
//# sourceMappingURL=ListSuitesPaginator.js.map