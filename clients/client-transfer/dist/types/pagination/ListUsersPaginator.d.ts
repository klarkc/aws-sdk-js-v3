import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { TransferPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUsers(config: TransferPaginationConfiguration, input: ListUsersCommandInput, ...additionalArguments: any): Paginator<ListUsersCommandOutput>;
