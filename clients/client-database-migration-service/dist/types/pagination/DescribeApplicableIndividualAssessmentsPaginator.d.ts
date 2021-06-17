import { DescribeApplicableIndividualAssessmentsCommandInput, DescribeApplicableIndividualAssessmentsCommandOutput } from "../commands/DescribeApplicableIndividualAssessmentsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeApplicableIndividualAssessments(config: DatabaseMigrationServicePaginationConfiguration, input: DescribeApplicableIndividualAssessmentsCommandInput, ...additionalArguments: any): Paginator<DescribeApplicableIndividualAssessmentsCommandOutput>;
