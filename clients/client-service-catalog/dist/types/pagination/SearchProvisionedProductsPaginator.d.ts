import { SearchProvisionedProductsCommandInput, SearchProvisionedProductsCommandOutput } from "../commands/SearchProvisionedProductsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchProvisionedProducts(config: ServiceCatalogPaginationConfiguration, input: SearchProvisionedProductsCommandInput, ...additionalArguments: any): Paginator<SearchProvisionedProductsCommandOutput>;
