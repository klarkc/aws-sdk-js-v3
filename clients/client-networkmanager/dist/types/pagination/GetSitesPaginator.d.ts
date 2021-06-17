import { GetSitesCommandInput, GetSitesCommandOutput } from "../commands/GetSitesCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSites(config: NetworkManagerPaginationConfiguration, input: GetSitesCommandInput, ...additionalArguments: any): Paginator<GetSitesCommandOutput>;
