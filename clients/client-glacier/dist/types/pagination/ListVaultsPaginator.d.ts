import { ListVaultsCommandInput, ListVaultsCommandOutput } from "../commands/ListVaultsCommand";
import { GlacierPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVaults(config: GlacierPaginationConfiguration, input: ListVaultsCommandInput, ...additionalArguments: any): Paginator<ListVaultsCommandOutput>;
