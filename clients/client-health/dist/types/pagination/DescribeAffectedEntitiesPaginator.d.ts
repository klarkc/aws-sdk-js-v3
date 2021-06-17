import { DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput } from "../commands/DescribeAffectedEntitiesCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAffectedEntities(config: HealthPaginationConfiguration, input: DescribeAffectedEntitiesCommandInput, ...additionalArguments: any): Paginator<DescribeAffectedEntitiesCommandOutput>;
