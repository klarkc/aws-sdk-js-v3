import { ListInputSecurityGroupsCommandInput, ListInputSecurityGroupsCommandOutput } from "../commands/ListInputSecurityGroupsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInputSecurityGroups(config: MediaLivePaginationConfiguration, input: ListInputSecurityGroupsCommandInput, ...additionalArguments: any): Paginator<ListInputSecurityGroupsCommandOutput>;
