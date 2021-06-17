import { DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput } from "../commands/DescribeModelVersionsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeModelVersions(config: FraudDetectorPaginationConfiguration, input: DescribeModelVersionsCommandInput, ...additionalArguments: any): Paginator<DescribeModelVersionsCommandOutput>;
