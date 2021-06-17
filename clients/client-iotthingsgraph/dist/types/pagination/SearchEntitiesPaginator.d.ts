import { SearchEntitiesCommandInput, SearchEntitiesCommandOutput } from "../commands/SearchEntitiesCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchEntities(config: IoTThingsGraphPaginationConfiguration, input: SearchEntitiesCommandInput, ...additionalArguments: any): Paginator<SearchEntitiesCommandOutput>;
