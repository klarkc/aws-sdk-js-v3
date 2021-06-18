import {
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "../commands/DescribeCustomDomainsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCustomDomains(
  config: AppRunnerPaginationConfiguration,
  input: DescribeCustomDomainsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCustomDomainsCommandOutput>;
