import { ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput } from "../commands/ListInstanceProfilesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstanceProfiles(config: IAMPaginationConfiguration, input: ListInstanceProfilesCommandInput, ...additionalArguments: any): Paginator<ListInstanceProfilesCommandOutput>;
