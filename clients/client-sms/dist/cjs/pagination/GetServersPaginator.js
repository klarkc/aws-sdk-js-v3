"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetServers = void 0;
const SMS_1 = require("../SMS");
const SMSClient_1 = require("../SMSClient");
const GetServersCommand_1 = require("../commands/GetServersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetServersCommand_1.GetServersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getServers(input, ...args);
};
async function* paginateGetServers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SMS_1.SMS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SMSClient_1.SMSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SMS | SMSClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetServers = paginateGetServers;
//# sourceMappingURL=GetServersPaginator.js.map