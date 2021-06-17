"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetResourceConfigHistory = void 0;
const ConfigService_1 = require("../ConfigService");
const ConfigServiceClient_1 = require("../ConfigServiceClient");
const GetResourceConfigHistoryCommand_1 = require("../commands/GetResourceConfigHistoryCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetResourceConfigHistoryCommand_1.GetResourceConfigHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getResourceConfigHistory(input, ...args);
};
async function* paginateGetResourceConfigHistory(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof ConfigService_1.ConfigService) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ConfigServiceClient_1.ConfigServiceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetResourceConfigHistory = paginateGetResourceConfigHistory;
//# sourceMappingURL=GetResourceConfigHistoryPaginator.js.map