import { ListCustomRoutingEndpointGroupsCommandInput, ListCustomRoutingEndpointGroupsCommandOutput } from "../commands/ListCustomRoutingEndpointGroupsCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCustomRoutingEndpointGroups(config: GlobalAcceleratorPaginationConfiguration, input: ListCustomRoutingEndpointGroupsCommandInput, ...additionalArguments: any): Paginator<ListCustomRoutingEndpointGroupsCommandOutput>;
