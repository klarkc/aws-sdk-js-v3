import { ListChildrenCommandInput, ListChildrenCommandOutput } from "../commands/ListChildrenCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChildren(config: OrganizationsPaginationConfiguration, input: ListChildrenCommandInput, ...additionalArguments: any): Paginator<ListChildrenCommandOutput>;
