import { ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput } from "../commands/ListTargetsForPolicyCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTargetsForPolicy(config: IoTPaginationConfiguration, input: ListTargetsForPolicyCommandInput, ...additionalArguments: any): Paginator<ListTargetsForPolicyCommandOutput>;
