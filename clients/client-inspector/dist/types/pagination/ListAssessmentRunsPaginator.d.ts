import { ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput } from "../commands/ListAssessmentRunsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssessmentRuns(config: InspectorPaginationConfiguration, input: ListAssessmentRunsCommandInput, ...additionalArguments: any): Paginator<ListAssessmentRunsCommandOutput>;
