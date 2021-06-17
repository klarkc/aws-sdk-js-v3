import { DescribeAffectedAccountsForOrganizationCommandInput, DescribeAffectedAccountsForOrganizationCommandOutput } from "../commands/DescribeAffectedAccountsForOrganizationCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAffectedAccountsForOrganization(config: HealthPaginationConfiguration, input: DescribeAffectedAccountsForOrganizationCommandInput, ...additionalArguments: any): Paginator<DescribeAffectedAccountsForOrganizationCommandOutput>;
