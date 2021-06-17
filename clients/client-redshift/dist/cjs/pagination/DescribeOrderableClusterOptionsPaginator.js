"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeOrderableClusterOptions = void 0;
const Redshift_1 = require("../Redshift");
const RedshiftClient_1 = require("../RedshiftClient");
const DescribeOrderableClusterOptionsCommand_1 = require("../commands/DescribeOrderableClusterOptionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeOrderableClusterOptionsCommand_1.DescribeOrderableClusterOptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeOrderableClusterOptions(input, ...args);
};
async function* paginateDescribeOrderableClusterOptions(config, input, ...additionalArguments) {
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
exports.paginateDescribeOrderableClusterOptions = paginateDescribeOrderableClusterOptions;
//# sourceMappingURL=DescribeOrderableClusterOptionsPaginator.js.map