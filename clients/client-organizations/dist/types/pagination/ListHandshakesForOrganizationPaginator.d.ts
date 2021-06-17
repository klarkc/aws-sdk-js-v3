import { ListHandshakesForOrganizationCommandInput, ListHandshakesForOrganizationCommandOutput } from "../commands/ListHandshakesForOrganizationCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHandshakesForOrganization(config: OrganizationsPaginationConfiguration, input: ListHandshakesForOrganizationCommandInput, ...additionalArguments: any): Paginator<ListHandshakesForOrganizationCommandOutput>;
