"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSlotTypes = void 0;
const LexModelsV2_1 = require("../LexModelsV2");
const LexModelsV2Client_1 = require("../LexModelsV2Client");
const ListSlotTypesCommand_1 = require("../commands/ListSlotTypesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSlotTypesCommand_1.ListSlotTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSlotTypes(input, ...args);
};
async function* paginateListSlotTypes(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof LexModelsV2_1.LexModelsV2) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LexModelsV2Client_1.LexModelsV2Client) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected LexModelsV2 | LexModelsV2Client");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSlotTypes = paginateListSlotTypes;
//# sourceMappingURL=ListSlotTypesPaginator.js.map