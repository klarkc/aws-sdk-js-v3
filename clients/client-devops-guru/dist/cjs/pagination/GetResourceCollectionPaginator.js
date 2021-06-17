"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetResourceCollection = void 0;
const DevOpsGuru_1 = require("../DevOpsGuru");
const DevOpsGuruClient_1 = require("../DevOpsGuruClient");
const GetResourceCollectionCommand_1 = require("../commands/GetResourceCollectionCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetResourceCollectionCommand_1.GetResourceCollectionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getResourceCollection(input, ...args);
};
async function* paginateGetResourceCollection(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        if (config.client instanceof DevOpsGuru_1.DevOpsGuru) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DevOpsGuruClient_1.DevOpsGuruClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetResourceCollection = paginateGetResourceCollection;
//# sourceMappingURL=GetResourceCollectionPaginator.js.map