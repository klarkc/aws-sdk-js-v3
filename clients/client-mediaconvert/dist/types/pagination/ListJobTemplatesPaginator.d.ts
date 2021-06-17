import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "../commands/ListJobTemplatesCommand";
import { MediaConvertPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobTemplates(config: MediaConvertPaginationConfiguration, input: ListJobTemplatesCommandInput, ...additionalArguments: any): Paginator<ListJobTemplatesCommandOutput>;
