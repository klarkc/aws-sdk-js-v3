import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUsers(config: ConnectPaginationConfiguration, input: ListUsersCommandInput, ...additionalArguments: any): Paginator<ListUsersCommandOutput>;
