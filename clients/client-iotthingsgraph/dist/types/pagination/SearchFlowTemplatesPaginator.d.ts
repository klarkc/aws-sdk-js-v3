import { SearchFlowTemplatesCommandInput, SearchFlowTemplatesCommandOutput } from "../commands/SearchFlowTemplatesCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchFlowTemplates(config: IoTThingsGraphPaginationConfiguration, input: SearchFlowTemplatesCommandInput, ...additionalArguments: any): Paginator<SearchFlowTemplatesCommandOutput>;
