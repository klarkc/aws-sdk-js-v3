"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPublicKeys = void 0;
const CloudTrail_1 = require("../CloudTrail");
const CloudTrailClient_1 = require("../CloudTrailClient");
const ListPublicKeysCommand_1 = require("../commands/ListPublicKeysCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPublicKeysCommand_1.ListPublicKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPublicKeys(input, ...args);
};
async function* paginateListPublicKeys(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        if (config.client instanceof CloudTrail_1.CloudTrail) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudTrailClient_1.CloudTrailClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPublicKeys = paginateListPublicKeys;
//# sourceMappingURL=ListPublicKeysPaginator.js.map