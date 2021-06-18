import {
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "../commands/DescribeConnectorProfilesCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeConnectorProfiles(
  config: AppflowPaginationConfiguration,
  input: DescribeConnectorProfilesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConnectorProfilesCommandOutput>;
