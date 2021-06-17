import { GetEnabledStandardsCommandInput, GetEnabledStandardsCommandOutput } from "../commands/GetEnabledStandardsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetEnabledStandards(config: SecurityHubPaginationConfiguration, input: GetEnabledStandardsCommandInput, ...additionalArguments: any): Paginator<GetEnabledStandardsCommandOutput>;
