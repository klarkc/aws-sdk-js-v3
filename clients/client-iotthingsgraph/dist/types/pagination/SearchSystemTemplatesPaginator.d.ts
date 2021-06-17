import { SearchSystemTemplatesCommandInput, SearchSystemTemplatesCommandOutput } from "../commands/SearchSystemTemplatesCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchSystemTemplates(config: IoTThingsGraphPaginationConfiguration, input: SearchSystemTemplatesCommandInput, ...additionalArguments: any): Paginator<SearchSystemTemplatesCommandOutput>;
