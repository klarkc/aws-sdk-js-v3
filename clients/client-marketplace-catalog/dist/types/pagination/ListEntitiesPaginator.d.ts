import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "../commands/ListEntitiesCommand";
import { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEntities(config: MarketplaceCatalogPaginationConfiguration, input: ListEntitiesCommandInput, ...additionalArguments: any): Paginator<ListEntitiesCommandOutput>;
