"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetPartitionIndexes = void 0;
const Glue_1 = require("../Glue");
const GlueClient_1 = require("../GlueClient");
const GetPartitionIndexesCommand_1 = require("../commands/GetPartitionIndexesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetPartitionIndexesCommand_1.GetPartitionIndexesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getPartitionIndexes(input, ...args);
};
async function* paginateGetPartitionIndexes(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        if (config.client instanceof Glue_1.Glue) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof GlueClient_1.GlueClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Glue | GlueClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetPartitionIndexes = paginateGetPartitionIndexes;
//# sourceMappingURL=GetPartitionIndexesPaginator.js.map