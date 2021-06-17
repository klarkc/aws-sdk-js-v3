"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStateMachines = void 0;
const SFN_1 = require("../SFN");
const SFNClient_1 = require("../SFNClient");
const ListStateMachinesCommand_1 = require("../commands/ListStateMachinesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListStateMachinesCommand_1.ListStateMachinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listStateMachines(input, ...args);
};
async function* paginateListStateMachines(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SFN_1.SFN) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SFNClient_1.SFNClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SFN | SFNClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListStateMachines = paginateListStateMachines;
//# sourceMappingURL=ListStateMachinesPaginator.js.map