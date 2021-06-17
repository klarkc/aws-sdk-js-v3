"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListDevices = void 0;
const WorkLink_1 = require("../WorkLink");
const WorkLinkClient_1 = require("../WorkLinkClient");
const ListDevicesCommand_1 = require("../commands/ListDevicesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListDevicesCommand_1.ListDevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listDevices(input, ...args);
};
async function* paginateListDevices(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof WorkLink_1.WorkLink) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof WorkLinkClient_1.WorkLinkClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected WorkLink | WorkLinkClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListDevices = paginateListDevices;
//# sourceMappingURL=ListDevicesPaginator.js.map