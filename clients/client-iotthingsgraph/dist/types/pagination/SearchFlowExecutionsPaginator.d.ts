import { SearchFlowExecutionsCommandInput, SearchFlowExecutionsCommandOutput } from "../commands/SearchFlowExecutionsCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchFlowExecutions(config: IoTThingsGraphPaginationConfiguration, input: SearchFlowExecutionsCommandInput, ...additionalArguments: any): Paginator<SearchFlowExecutionsCommandOutput>;
