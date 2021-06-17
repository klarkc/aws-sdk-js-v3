"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeReplicationTaskAssessmentRuns = void 0;
const DatabaseMigrationService_1 = require("../DatabaseMigrationService");
const DatabaseMigrationServiceClient_1 = require("../DatabaseMigrationServiceClient");
const DescribeReplicationTaskAssessmentRunsCommand_1 = require("../commands/DescribeReplicationTaskAssessmentRunsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeReplicationTaskAssessmentRunsCommand_1.DescribeReplicationTaskAssessmentRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeReplicationTaskAssessmentRuns(input, ...args);
};
async function* paginateDescribeReplicationTaskAssessmentRuns(config, input, ...additionalArguments) {
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
exports.paginateDescribeReplicationTaskAssessmentRuns = paginateDescribeReplicationTaskAssessmentRuns;
//# sourceMappingURL=DescribeReplicationTaskAssessmentRunsPaginator.js.map