import { ListAssociatedResourcesCommandInput, ListAssociatedResourcesCommandOutput } from "../commands/ListAssociatedResourcesCommand";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssociatedResources(config: ServiceCatalogAppRegistryPaginationConfiguration, input: ListAssociatedResourcesCommandInput, ...additionalArguments: any): Paginator<ListAssociatedResourcesCommandOutput>;
