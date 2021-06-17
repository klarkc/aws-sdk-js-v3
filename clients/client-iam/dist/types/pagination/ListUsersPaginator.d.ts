import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUsers(config: IAMPaginationConfiguration, input: ListUsersCommandInput, ...additionalArguments: any): Paginator<ListUsersCommandOutput>;
