import { ListAssessmentRunAgentsCommandInput, ListAssessmentRunAgentsCommandOutput } from "../commands/ListAssessmentRunAgentsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssessmentRunAgents(config: InspectorPaginationConfiguration, input: ListAssessmentRunAgentsCommandInput, ...additionalArguments: any): Paginator<ListAssessmentRunAgentsCommandOutput>;
