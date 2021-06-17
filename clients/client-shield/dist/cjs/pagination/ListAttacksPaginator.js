"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAttacks = void 0;
const Shield_1 = require("../Shield");
const ShieldClient_1 = require("../ShieldClient");
const ListAttacksCommand_1 = require("../commands/ListAttacksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAttacksCommand_1.ListAttacksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAttacks(input, ...args);
};
async function* paginateListAttacks(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Shield_1.Shield) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof ShieldClient_1.ShieldClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Shield | ShieldClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAttacks = paginateListAttacks;
//# sourceMappingURL=ListAttacksPaginator.js.map