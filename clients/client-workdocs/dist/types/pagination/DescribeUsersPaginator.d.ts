import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "../commands/DescribeUsersCommand";
import { WorkDocsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeUsers(config: WorkDocsPaginationConfiguration, input: DescribeUsersCommandInput, ...additionalArguments: any): Paginator<DescribeUsersCommandOutput>;
