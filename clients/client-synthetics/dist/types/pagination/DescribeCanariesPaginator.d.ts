import { DescribeCanariesCommandInput, DescribeCanariesCommandOutput } from "../commands/DescribeCanariesCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCanaries(config: SyntheticsPaginationConfiguration, input: DescribeCanariesCommandInput, ...additionalArguments: any): Paginator<DescribeCanariesCommandOutput>;
