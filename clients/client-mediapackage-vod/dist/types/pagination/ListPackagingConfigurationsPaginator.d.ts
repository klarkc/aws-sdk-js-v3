import { ListPackagingConfigurationsCommandInput, ListPackagingConfigurationsCommandOutput } from "../commands/ListPackagingConfigurationsCommand";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPackagingConfigurations(config: MediaPackageVodPaginationConfiguration, input: ListPackagingConfigurationsCommandInput, ...additionalArguments: any): Paginator<ListPackagingConfigurationsCommandOutput>;
