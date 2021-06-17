import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { WorkLinkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFleets(config: WorkLinkPaginationConfiguration, input: ListFleetsCommandInput, ...additionalArguments: any): Paginator<ListFleetsCommandOutput>;
