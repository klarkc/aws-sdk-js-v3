import {
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "../commands/DescribeImagePermissionsCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeImagePermissions(
  config: AppStreamPaginationConfiguration,
  input: DescribeImagePermissionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImagePermissionsCommandOutput>;
