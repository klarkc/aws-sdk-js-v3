"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetBuiltinIntents = void 0;
const LexModelBuildingService_1 = require("../LexModelBuildingService");
const LexModelBuildingServiceClient_1 = require("../LexModelBuildingServiceClient");
const GetBuiltinIntentsCommand_1 = require("../commands/GetBuiltinIntentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetBuiltinIntentsCommand_1.GetBuiltinIntentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getBuiltinIntents(input, ...args);
};
async function* paginateGetBuiltinIntents(config, input, ...additionalArguments) {
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
exports.paginateGetBuiltinIntents = paginateGetBuiltinIntents;
//# sourceMappingURL=GetBuiltinIntentsPaginator.js.map