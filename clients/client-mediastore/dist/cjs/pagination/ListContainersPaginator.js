"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListContainers = void 0;
const MediaStore_1 = require("../MediaStore");
const MediaStoreClient_1 = require("../MediaStoreClient");
const ListContainersCommand_1 = require("../commands/ListContainersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListContainersCommand_1.ListContainersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listContainers(input, ...args);
};
async function* paginateListContainers(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof MediaStore_1.MediaStore) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MediaStoreClient_1.MediaStoreClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected MediaStore | MediaStoreClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListContainers = paginateListContainers;
//# sourceMappingURL=ListContainersPaginator.js.map