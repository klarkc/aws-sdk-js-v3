import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { DetectivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMembers(config: DetectivePaginationConfiguration, input: ListMembersCommandInput, ...additionalArguments: any): Paginator<ListMembersCommandOutput>;
