import { DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput } from "../commands/DescribeTapeArchivesCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTapeArchives(config: StorageGatewayPaginationConfiguration, input: DescribeTapeArchivesCommandInput, ...additionalArguments: any): Paginator<DescribeTapeArchivesCommandOutput>;
