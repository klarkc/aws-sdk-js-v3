import { ListAssociatedAttributeGroupsCommandInput, ListAssociatedAttributeGroupsCommandOutput } from "../commands/ListAssociatedAttributeGroupsCommand";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssociatedAttributeGroups(config: ServiceCatalogAppRegistryPaginationConfiguration, input: ListAssociatedAttributeGroupsCommandInput, ...additionalArguments: any): Paginator<ListAssociatedAttributeGroupsCommandOutput>;
