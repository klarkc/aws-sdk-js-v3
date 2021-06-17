import { GetSystemTemplateRevisionsCommandInput, GetSystemTemplateRevisionsCommandOutput } from "../commands/GetSystemTemplateRevisionsCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSystemTemplateRevisions(config: IoTThingsGraphPaginationConfiguration, input: GetSystemTemplateRevisionsCommandInput, ...additionalArguments: any): Paginator<GetSystemTemplateRevisionsCommandOutput>;
