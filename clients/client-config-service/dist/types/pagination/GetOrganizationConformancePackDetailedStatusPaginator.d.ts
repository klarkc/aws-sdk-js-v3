import { GetOrganizationConformancePackDetailedStatusCommandInput, GetOrganizationConformancePackDetailedStatusCommandOutput } from "../commands/GetOrganizationConformancePackDetailedStatusCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetOrganizationConformancePackDetailedStatus(config: ConfigServicePaginationConfiguration, input: GetOrganizationConformancePackDetailedStatusCommandInput, ...additionalArguments: any): Paginator<GetOrganizationConformancePackDetailedStatusCommandOutput>;
