import { ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput } from "../commands/ListTargetsForPolicyCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTargetsForPolicy(config: OrganizationsPaginationConfiguration, input: ListTargetsForPolicyCommandInput, ...additionalArguments: any): Paginator<ListTargetsForPolicyCommandOutput>;
