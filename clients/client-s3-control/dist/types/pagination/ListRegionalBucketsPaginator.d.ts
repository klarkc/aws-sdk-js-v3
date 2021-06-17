import { ListRegionalBucketsCommandInput, ListRegionalBucketsCommandOutput } from "../commands/ListRegionalBucketsCommand";
import { S3ControlPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRegionalBuckets(config: S3ControlPaginationConfiguration, input: ListRegionalBucketsCommandInput, ...additionalArguments: any): Paginator<ListRegionalBucketsCommandOutput>;
