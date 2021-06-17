"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCoreDevices = void 0;
const GreengrassV2_1 = require("../GreengrassV2");
const GreengrassV2Client_1 = require("../GreengrassV2Client");
const ListCoreDevicesCommand_1 = require("../commands/ListCoreDevicesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListCoreDevicesCommand_1.ListCoreDevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listCoreDevices(input, ...args);
};
async function* paginateListCoreDevices(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof GreengrassV2_1.GreengrassV2) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GreengrassV2Client_1.GreengrassV2Client) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected GreengrassV2 | GreengrassV2Client");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListCoreDevices = paginateListCoreDevices;
//# sourceMappingURL=ListCoreDevicesPaginator.js.map