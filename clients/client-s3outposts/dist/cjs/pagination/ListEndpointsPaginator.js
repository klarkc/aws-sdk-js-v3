"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEndpoints = void 0;
const S3Outposts_1 = require("../S3Outposts");
const S3OutpostsClient_1 = require("../S3OutpostsClient");
const ListEndpointsCommand_1 = require("../commands/ListEndpointsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListEndpointsCommand_1.ListEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listEndpoints(input, ...args);
};
async function* paginateListEndpoints(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof S3Outposts_1.S3Outposts) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof S3OutpostsClient_1.S3OutpostsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected S3Outposts | S3OutpostsClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListEndpoints = paginateListEndpoints;
//# sourceMappingURL=ListEndpointsPaginator.js.map