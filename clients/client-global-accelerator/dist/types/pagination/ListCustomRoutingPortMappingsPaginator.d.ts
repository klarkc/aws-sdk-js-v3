import { ListCustomRoutingPortMappingsCommandInput, ListCustomRoutingPortMappingsCommandOutput } from "../commands/ListCustomRoutingPortMappingsCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCustomRoutingPortMappings(config: GlobalAcceleratorPaginationConfiguration, input: ListCustomRoutingPortMappingsCommandInput, ...additionalArguments: any): Paginator<ListCustomRoutingPortMappingsCommandOutput>;
