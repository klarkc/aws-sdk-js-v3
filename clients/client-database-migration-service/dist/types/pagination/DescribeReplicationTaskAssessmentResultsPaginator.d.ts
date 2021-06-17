import { DescribeReplicationTaskAssessmentResultsCommandInput, DescribeReplicationTaskAssessmentResultsCommandOutput } from "../commands/DescribeReplicationTaskAssessmentResultsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationTaskAssessmentResults(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeReplicationTaskAssessmentResultsCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationTaskAssessmentResultsCommandOutput>;
