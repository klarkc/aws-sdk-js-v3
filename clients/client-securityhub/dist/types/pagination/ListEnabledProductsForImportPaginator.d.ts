import { ListEnabledProductsForImportCommandInput, ListEnabledProductsForImportCommandOutput } from "../commands/ListEnabledProductsForImportCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEnabledProductsForImport(config: SecurityHubPaginationConfiguration, input: ListEnabledProductsForImportCommandInput, ...additionalArguments: any): Paginator<ListEnabledProductsForImportCommandOutput>;
