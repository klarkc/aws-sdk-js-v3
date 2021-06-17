import { ListSigningProfilesCommandInput, ListSigningProfilesCommandOutput } from "../commands/ListSigningProfilesCommand";
import { SignerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSigningProfiles(config: SignerPaginationConfiguration, input: ListSigningProfilesCommandInput, ...additionalArguments: any): Paginator<ListSigningProfilesCommandOutput>;
