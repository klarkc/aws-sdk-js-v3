import { ListStateMachinesCommandInput, ListStateMachinesCommandOutput } from "../commands/ListStateMachinesCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStateMachines(config: SFNPaginationConfiguration, input: ListStateMachinesCommandInput, ...additionalArguments: any): Paginator<ListStateMachinesCommandOutput>;
