import { ListOrganizationsCommandInput, ListOrganizationsCommandOutput } from "../commands/ListOrganizationsCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOrganizations(config: WorkMailPaginationConfiguration, input: ListOrganizationsCommandInput, ...additionalArguments: any): Paginator<ListOrganizationsCommandOutput>;
