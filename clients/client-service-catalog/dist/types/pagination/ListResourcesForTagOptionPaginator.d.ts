import { ListResourcesForTagOptionCommandInput, ListResourcesForTagOptionCommandOutput } from "../commands/ListResourcesForTagOptionCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResourcesForTagOption(config: ServiceCatalogPaginationConfiguration, input: ListResourcesForTagOptionCommandInput, ...additionalArguments: any): Paginator<ListResourcesForTagOptionCommandOutput>;
