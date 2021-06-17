import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ServiceCatalogAppRegistryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApplications(config: ServiceCatalogAppRegistryPaginationConfiguration, input: ListApplicationsCommandInput, ...additionalArguments: any): Paginator<ListApplicationsCommandOutput>;
