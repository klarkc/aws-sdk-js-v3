import { GetPartitionIndexesCommandInput, GetPartitionIndexesCommandOutput } from "../commands/GetPartitionIndexesCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetPartitionIndexes(config: GluePaginationConfiguration, input: GetPartitionIndexesCommandInput, ...additionalArguments: any): Paginator<GetPartitionIndexesCommandOutput>;
