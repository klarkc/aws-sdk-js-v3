"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeEndpoints = void 0;
const DatabaseMigrationService_1 = require("../DatabaseMigrationService");
const DatabaseMigrationServiceClient_1 = require("../DatabaseMigrationServiceClient");
const DescribeEndpointsCommand_1 = require("../commands/DescribeEndpointsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeEndpointsCommand_1.DescribeEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeEndpoints(input, ...args);
};
async function* paginateDescribeEndpoints(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxRecords"] = config.pageSize;
        if (config.client instanceof DatabaseMigrationService_1.DatabaseMigrationService) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DatabaseMigrationServiceClient_1.DatabaseMigrationServiceClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeEndpoints = paginateDescribeEndpoints;
//# sourceMappingURL=DescribeEndpointsPaginator.js.map