import { DescribeEventsForOrganizationCommandInput, DescribeEventsForOrganizationCommandOutput } from "../commands/DescribeEventsForOrganizationCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEventsForOrganization(config: HealthPaginationConfiguration, input: DescribeEventsForOrganizationCommandInput, ...additionalArguments: any): Paginator<DescribeEventsForOrganizationCommandOutput>;
