import { ListUseCasesCommandInput, ListUseCasesCommandOutput } from "../commands/ListUseCasesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUseCases(config: ConnectPaginationConfiguration, input: ListUseCasesCommandInput, ...additionalArguments: any): Paginator<ListUseCasesCommandOutput>;
