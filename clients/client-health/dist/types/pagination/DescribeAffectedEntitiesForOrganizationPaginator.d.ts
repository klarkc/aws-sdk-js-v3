import { DescribeAffectedEntitiesForOrganizationCommandInput, DescribeAffectedEntitiesForOrganizationCommandOutput } from "../commands/DescribeAffectedEntitiesForOrganizationCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAffectedEntitiesForOrganization(config: HealthPaginationConfiguration, input: DescribeAffectedEntitiesForOrganizationCommandInput, ...additionalArguments: any): Paginator<DescribeAffectedEntitiesForOrganizationCommandOutput>;
