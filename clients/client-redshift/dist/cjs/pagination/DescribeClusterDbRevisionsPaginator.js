"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeClusterDbRevisions = void 0;
const Redshift_1 = require("../Redshift");
const RedshiftClient_1 = require("../RedshiftClient");
const DescribeClusterDbRevisionsCommand_1 = require("../commands/DescribeClusterDbRevisionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeClusterDbRevisionsCommand_1.DescribeClusterDbRevisionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeClusterDbRevisions(input, ...args);
};
async function* paginateDescribeClusterDbRevisions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxRecords"] = config.pageSize;
        if (config.client instanceof Redshift_1.Redshift) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof RedshiftClient_1.RedshiftClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Redshift | RedshiftClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeClusterDbRevisions = paginateDescribeClusterDbRevisions;
//# sourceMappingURL=DescribeClusterDbRevisionsPaginator.js.map