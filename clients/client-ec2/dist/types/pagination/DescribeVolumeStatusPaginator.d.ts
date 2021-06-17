import { DescribeVolumeStatusCommandInput, DescribeVolumeStatusCommandOutput } from "../commands/DescribeVolumeStatusCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeVolumeStatus(config: EC2PaginationConfiguration, input: DescribeVolumeStatusCommandInput, ...additionalArguments: any): Paginator<DescribeVolumeStatusCommandOutput>;
