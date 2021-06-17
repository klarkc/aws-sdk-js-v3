import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "../commands/ListAccessPoliciesCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccessPolicies(config: IoTSiteWisePaginationConfiguration, input: ListAccessPoliciesCommandInput, ...additionalArguments: any): Paginator<ListAccessPoliciesCommandOutput>;
