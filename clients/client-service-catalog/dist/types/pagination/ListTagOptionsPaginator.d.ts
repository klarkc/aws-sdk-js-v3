import { ListTagOptionsCommandInput, ListTagOptionsCommandOutput } from "../commands/ListTagOptionsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTagOptions(config: ServiceCatalogPaginationConfiguration, input: ListTagOptionsCommandInput, ...additionalArguments: any): Paginator<ListTagOptionsCommandOutput>;
