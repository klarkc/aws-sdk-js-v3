import { ListRootsCommandInput, ListRootsCommandOutput } from "../commands/ListRootsCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRoots(config: OrganizationsPaginationConfiguration, input: ListRootsCommandInput, ...additionalArguments: any): Paginator<ListRootsCommandOutput>;
