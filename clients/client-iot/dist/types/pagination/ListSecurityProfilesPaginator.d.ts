import { ListSecurityProfilesCommandInput, ListSecurityProfilesCommandOutput } from "../commands/ListSecurityProfilesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSecurityProfiles(config: IoTPaginationConfiguration, input: ListSecurityProfilesCommandInput, ...additionalArguments: any): Paginator<ListSecurityProfilesCommandOutput>;
