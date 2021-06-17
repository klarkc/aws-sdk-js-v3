import { ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput } from "../commands/ListEndpointGroupsCommand";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEndpointGroups(config: GlobalAcceleratorPaginationConfiguration, input: ListEndpointGroupsCommandInput, ...additionalArguments: any): Paginator<ListEndpointGroupsCommandOutput>;
