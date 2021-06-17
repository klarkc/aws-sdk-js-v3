import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "../commands/ListChangeSetsCommand";
import { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChangeSets(config: MarketplaceCatalogPaginationConfiguration, input: ListChangeSetsCommandInput, ...additionalArguments: any): Paginator<ListChangeSetsCommandOutput>;
