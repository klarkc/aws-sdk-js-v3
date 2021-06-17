import { GetFlowTemplateRevisionsCommandInput, GetFlowTemplateRevisionsCommandOutput } from "../commands/GetFlowTemplateRevisionsCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetFlowTemplateRevisions(config: IoTThingsGraphPaginationConfiguration, input: GetFlowTemplateRevisionsCommandInput, ...additionalArguments: any): Paginator<GetFlowTemplateRevisionsCommandOutput>;
