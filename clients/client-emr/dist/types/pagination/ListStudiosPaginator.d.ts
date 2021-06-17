import { ListStudiosCommandInput, ListStudiosCommandOutput } from "../commands/ListStudiosCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStudios(config: EMRPaginationConfiguration, input: ListStudiosCommandInput, ...additionalArguments: any): Paginator<ListStudiosCommandOutput>;
