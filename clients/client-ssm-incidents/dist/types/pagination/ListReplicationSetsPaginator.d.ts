import { ListReplicationSetsCommandInput, ListReplicationSetsCommandOutput } from "../commands/ListReplicationSetsCommand";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReplicationSets(config: SSMIncidentsPaginationConfiguration, input: ListReplicationSetsCommandInput, ...additionalArguments: any): Paginator<ListReplicationSetsCommandOutput>;
