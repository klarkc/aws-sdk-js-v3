import { DescribeReplicationTaskIndividualAssessmentsCommandInput, DescribeReplicationTaskIndividualAssessmentsCommandOutput } from "../commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationTaskIndividualAssessments(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeReplicationTaskIndividualAssessmentsCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationTaskIndividualAssessmentsCommandOutput>;
