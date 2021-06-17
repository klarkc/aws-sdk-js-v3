import { DescribeBucketsCommandInput, DescribeBucketsCommandOutput } from "../commands/DescribeBucketsCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBuckets(config: Macie2PaginationConfiguration, input: DescribeBucketsCommandInput, ...additionalArguments: any): Paginator<DescribeBucketsCommandOutput>;
