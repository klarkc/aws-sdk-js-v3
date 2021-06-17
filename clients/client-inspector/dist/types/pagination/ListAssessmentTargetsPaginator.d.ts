import { ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput } from "../commands/ListAssessmentTargetsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssessmentTargets(config: InspectorPaginationConfiguration, input: ListAssessmentTargetsCommandInput, ...additionalArguments: any): Paginator<ListAssessmentTargetsCommandOutput>;
