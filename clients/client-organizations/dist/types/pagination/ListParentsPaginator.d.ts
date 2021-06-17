import { ListParentsCommandInput, ListParentsCommandOutput } from "../commands/ListParentsCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListParents(config: OrganizationsPaginationConfiguration, input: ListParentsCommandInput, ...additionalArguments: any): Paginator<ListParentsCommandOutput>;
