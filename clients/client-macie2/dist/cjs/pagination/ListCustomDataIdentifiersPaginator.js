"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListCustomDataIdentifiers = void 0;
const Macie2_1 = require("../Macie2");
const Macie2Client_1 = require("../Macie2Client");
const ListCustomDataIdentifiersCommand_1 = require("../commands/ListCustomDataIdentifiersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListCustomDataIdentifiersCommand_1.ListCustomDataIdentifiersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listCustomDataIdentifiers(input, ...args);
};
async function* paginateListCustomDataIdentifiers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Macie2_1.Macie2) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof Macie2Client_1.Macie2Client) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Macie2 | Macie2Client");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListCustomDataIdentifiers = paginateListCustomDataIdentifiers;
//# sourceMappingURL=ListCustomDataIdentifiersPaginator.js.map