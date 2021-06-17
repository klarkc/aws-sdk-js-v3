import { DescribeReplicationTaskAssessmentRunsCommandInput, DescribeReplicationTaskAssessmentRunsCommandOutput } from "../commands/DescribeReplicationTaskAssessmentRunsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationTaskAssessmentRuns(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeReplicationTaskAssessmentRunsCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationTaskAssessmentRunsCommandOutput>;
