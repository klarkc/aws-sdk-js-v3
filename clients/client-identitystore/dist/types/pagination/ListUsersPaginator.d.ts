import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { IdentitystorePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUsers(config: IdentitystorePaginationConfiguration, input: ListUsersCommandInput, ...additionalArguments: any): Paginator<ListUsersCommandOutput>;
