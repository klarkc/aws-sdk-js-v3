import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "../commands/ListUserProfilesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUserProfiles(config: SageMakerPaginationConfiguration, input: ListUserProfilesCommandInput, ...additionalArguments: any): Paginator<ListUserProfilesCommandOutput>;
