import { ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput } from "../commands/ListEntitiesForPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEntitiesForPolicy(config: IAMPaginationConfiguration, input: ListEntitiesForPolicyCommandInput, ...additionalArguments: any): Paginator<ListEntitiesForPolicyCommandOutput>;
