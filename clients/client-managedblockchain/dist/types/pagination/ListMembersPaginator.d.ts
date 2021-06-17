import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMembers(config: ManagedBlockchainPaginationConfiguration, input: ListMembersCommandInput, ...additionalArguments: any): Paginator<ListMembersCommandOutput>;
