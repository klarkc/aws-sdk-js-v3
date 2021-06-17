import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "../commands/ListExecutionsCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListExecutions(config: SFNPaginationConfiguration, input: ListExecutionsCommandInput, ...additionalArguments: any): Paginator<ListExecutionsCommandOutput>;
