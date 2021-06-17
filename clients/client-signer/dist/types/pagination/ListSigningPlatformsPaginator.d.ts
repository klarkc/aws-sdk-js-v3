import { ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput } from "../commands/ListSigningPlatformsCommand";
import { SignerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSigningPlatforms(config: SignerPaginationConfiguration, input: ListSigningPlatformsCommandInput, ...additionalArguments: any): Paginator<ListSigningPlatformsCommandOutput>;
