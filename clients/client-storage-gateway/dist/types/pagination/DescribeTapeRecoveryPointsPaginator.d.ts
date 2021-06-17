import { DescribeTapeRecoveryPointsCommandInput, DescribeTapeRecoveryPointsCommandOutput } from "../commands/DescribeTapeRecoveryPointsCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeTapeRecoveryPoints(config: StorageGatewayPaginationConfiguration, input: DescribeTapeRecoveryPointsCommandInput, ...additionalArguments: any): Paginator<DescribeTapeRecoveryPointsCommandOutput>;
