import { ListDataflowEndpointGroupsCommandInput, ListDataflowEndpointGroupsCommandOutput } from "../commands/ListDataflowEndpointGroupsCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataflowEndpointGroups(config: GroundStationPaginationConfiguration, input: ListDataflowEndpointGroupsCommandInput, ...additionalArguments: any): Paginator<ListDataflowEndpointGroupsCommandOutput>;
