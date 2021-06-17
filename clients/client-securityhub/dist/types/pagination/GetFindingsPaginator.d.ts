import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetFindings(config: SecurityHubPaginationConfiguration, input: GetFindingsCommandInput, ...additionalArguments: any): Paginator<GetFindingsCommandOutput>;
