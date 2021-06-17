import { ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput } from "../commands/ListAWSServiceAccessForOrganizationCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAWSServiceAccessForOrganization(config: OrganizationsPaginationConfiguration, input: ListAWSServiceAccessForOrganizationCommandInput, ...additionalArguments: any): Paginator<ListAWSServiceAccessForOrganizationCommandOutput>;
