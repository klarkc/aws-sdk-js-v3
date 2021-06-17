import { GetPartitionsCommandInput, GetPartitionsCommandOutput } from "../commands/GetPartitionsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetPartitions(config: GluePaginationConfiguration, input: GetPartitionsCommandInput, ...additionalArguments: any): Paginator<GetPartitionsCommandOutput>;
