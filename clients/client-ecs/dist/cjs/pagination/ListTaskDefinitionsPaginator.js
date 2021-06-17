"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTaskDefinitions = void 0;
const ECS_1 = require("../ECS");
const ECSClient_1 = require("../ECSClient");
const ListTaskDefinitionsCommand_1 = require("../commands/ListTaskDefinitionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTaskDefinitionsCommand_1.ListTaskDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTaskDefinitions(input, ...args);
};
async function* paginateListTaskDefinitions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof ECS_1.ECS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ECSClient_1.ECSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected ECS | ECSClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListTaskDefinitions = paginateListTaskDefinitions;
//# sourceMappingURL=ListTaskDefinitionsPaginator.js.map