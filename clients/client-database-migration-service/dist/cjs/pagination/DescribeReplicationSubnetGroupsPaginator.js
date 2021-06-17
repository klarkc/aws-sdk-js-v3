"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeReplicationSubnetGroups = void 0;
const DatabaseMigrationService_1 = require("../DatabaseMigrationService");
const DatabaseMigrationServiceClient_1 = require("../DatabaseMigrationServiceClient");
const DescribeReplicationSubnetGroupsCommand_1 = require("../commands/DescribeReplicationSubnetGroupsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeReplicationSubnetGroupsCommand_1.DescribeReplicationSubnetGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeReplicationSubnetGroups(input, ...args);
};
async function* paginateDescribeReplicationSubnetGroups(config, input, ...additionalArguments) {
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
exports.paginateDescribeReplicationSubnetGroups = paginateDescribeReplicationSubnetGroups;
//# sourceMappingURL=DescribeReplicationSubnetGroupsPaginator.js.map