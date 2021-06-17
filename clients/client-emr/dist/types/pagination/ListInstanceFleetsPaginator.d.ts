import { ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput } from "../commands/ListInstanceFleetsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstanceFleets(config: EMRPaginationConfiguration, input: ListInstanceFleetsCommandInput, ...additionalArguments: any): Paginator<ListInstanceFleetsCommandOutput>;
