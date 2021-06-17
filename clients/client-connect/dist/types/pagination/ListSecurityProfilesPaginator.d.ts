import { ListSecurityProfilesCommandInput, ListSecurityProfilesCommandOutput } from "../commands/ListSecurityProfilesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSecurityProfiles(config: ConnectPaginationConfiguration, input: ListSecurityProfilesCommandInput, ...additionalArguments: any): Paginator<ListSecurityProfilesCommandOutput>;
