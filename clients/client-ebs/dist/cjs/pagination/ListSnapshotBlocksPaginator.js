"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListSnapshotBlocks = void 0;
const EBS_1 = require("../EBS");
const EBSClient_1 = require("../EBSClient");
const ListSnapshotBlocksCommand_1 = require("../commands/ListSnapshotBlocksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListSnapshotBlocksCommand_1.ListSnapshotBlocksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listSnapshotBlocks(input, ...args);
};
async function* paginateListSnapshotBlocks(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof EBS_1.EBS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof EBSClient_1.EBSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected EBS | EBSClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListSnapshotBlocks = paginateListSnapshotBlocks;
//# sourceMappingURL=ListSnapshotBlocksPaginator.js.map