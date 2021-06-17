import { ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput } from "../commands/ListBillingGroupsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBillingGroups(config: IoTPaginationConfiguration, input: ListBillingGroupsCommandInput, ...additionalArguments: any): Paginator<ListBillingGroupsCommandOutput>;
