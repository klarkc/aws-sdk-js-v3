"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetIntentVersions = void 0;
const LexModelBuildingService_1 = require("../LexModelBuildingService");
const LexModelBuildingServiceClient_1 = require("../LexModelBuildingServiceClient");
const GetIntentVersionsCommand_1 = require("../commands/GetIntentVersionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetIntentVersionsCommand_1.GetIntentVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getIntentVersions(input, ...args);
};
async function* paginateGetIntentVersions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof LexModelBuildingService_1.LexModelBuildingService) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LexModelBuildingServiceClient_1.LexModelBuildingServiceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected LexModelBuildingService | LexModelBuildingServiceClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetIntentVersions = paginateGetIntentVersions;
//# sourceMappingURL=GetIntentVersionsPaginator.js.map