import { ListCustomRoutingPortMappingsByDestinationCommandInput, ListCustomRoutingPortMappingsByDestinationCommandOutput } from "../commands/ListCustomRoutingPortMappingsByDestinationCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCustomRoutingPortMappingsByDestination(config: GlobalAcceleratorPaginationConfiguration, input: ListCustomRoutingPortMappingsByDestinationCommandInput, ...additionalArguments: any): Paginator<ListCustomRoutingPortMappingsByDestinationCommandOutput>;
