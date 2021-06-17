"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDeviceProfiles = void 0;
const IoTWireless_1 = require("../IoTWireless");
const IoTWirelessClient_1 = require("../IoTWirelessClient");
const ListDeviceProfilesCommand_1 = require("../commands/ListDeviceProfilesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDeviceProfilesCommand_1.ListDeviceProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDeviceProfiles(input, ...args);
};
async function* paginateListDeviceProfiles(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof IoTWireless_1.IoTWireless) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IoTWirelessClient_1.IoTWirelessClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IoTWireless | IoTWirelessClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDeviceProfiles = paginateListDeviceProfiles;
//# sourceMappingURL=ListDeviceProfilesPaginator.js.map