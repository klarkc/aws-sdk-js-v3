"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeReplicationTaskIndividualAssessments = void 0;
const DatabaseMigrationService_1 = require("../DatabaseMigrationService");
const DatabaseMigrationServiceClient_1 = require("../DatabaseMigrationServiceClient");
const DescribeReplicationTaskIndividualAssessmentsCommand_1 = require("../commands/DescribeReplicationTaskIndividualAssessmentsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeReplicationTaskIndividualAssessmentsCommand_1.DescribeReplicationTaskIndividualAssessmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeReplicationTaskIndividualAssessments(input, ...args);
};
async function* paginateDescribeReplicationTaskIndividualAssessments(config, input, ...additionalArguments) {
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
exports.paginateDescribeReplicationTaskIndividualAssessments = paginateDescribeReplicationTaskIndividualAssessments;
//# sourceMappingURL=DescribeReplicationTaskIndividualAssessmentsPaginator.js.map