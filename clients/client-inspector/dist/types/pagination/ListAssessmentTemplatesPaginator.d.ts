import { ListAssessmentTemplatesCommandInput, ListAssessmentTemplatesCommandOutput } from "../commands/ListAssessmentTemplatesCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssessmentTemplates(config: InspectorPaginationConfiguration, input: ListAssessmentTemplatesCommandInput, ...additionalArguments: any): Paginator<ListAssessmentTemplatesCommandOutput>;
