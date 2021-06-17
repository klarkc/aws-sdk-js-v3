import { ListOrganizationalUnitsForParentCommandInput, ListOrganizationalUnitsForParentCommandOutput } from "../commands/ListOrganizationalUnitsForParentCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOrganizationalUnitsForParent(config: OrganizationsPaginationConfiguration, input: ListOrganizationalUnitsForParentCommandInput, ...additionalArguments: any): Paginator<ListOrganizationalUnitsForParentCommandOutput>;
