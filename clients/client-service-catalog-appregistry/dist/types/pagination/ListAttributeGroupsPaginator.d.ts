import { ListAttributeGroupsCommandInput, ListAttributeGroupsCommandOutput } from "../commands/ListAttributeGroupsCommand";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAttributeGroups(config: ServiceCatalogAppRegistryPaginationConfiguration, input: ListAttributeGroupsCommandInput, ...additionalArguments: any): Paginator<ListAttributeGroupsCommandOutput>;
