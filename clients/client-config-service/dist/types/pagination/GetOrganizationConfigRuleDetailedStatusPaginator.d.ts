import { GetOrganizationConfigRuleDetailedStatusCommandInput, GetOrganizationConfigRuleDetailedStatusCommandOutput } from "../commands/GetOrganizationConfigRuleDetailedStatusCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetOrganizationConfigRuleDetailedStatus(config: ConfigServicePaginationConfiguration, input: GetOrganizationConfigRuleDetailedStatusCommandInput, ...additionalArguments: any): Paginator<GetOrganizationConfigRuleDetailedStatusCommandOutput>;
