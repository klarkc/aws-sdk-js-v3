"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListAccessKeys = void 0;
const IAM_1 = require("../IAM");
const IAMClient_1 = require("../IAMClient");
const ListAccessKeysCommand_1 = require("../commands/ListAccessKeysCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListAccessKeysCommand_1.ListAccessKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listAccessKeys(input, ...args);
};
async function* paginateListAccessKeys(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
        if (config.client instanceof IAM_1.IAM) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof IAMClient_1.IAMClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected IAM | IAMClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListAccessKeys = paginateListAccessKeys;
//# sourceMappingURL=ListAccessKeysPaginator.js.map