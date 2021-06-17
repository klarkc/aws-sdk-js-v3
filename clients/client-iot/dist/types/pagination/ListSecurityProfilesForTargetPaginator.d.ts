import { ListSecurityProfilesForTargetCommandInput, ListSecurityProfilesForTargetCommandOutput } from "../commands/ListSecurityProfilesForTargetCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSecurityProfilesForTarget(config: IoTPaginationConfiguration, input: ListSecurityProfilesForTargetCommandInput, ...additionalArguments: any): Paginator<ListSecurityProfilesForTargetCommandOutput>;
