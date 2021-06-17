import { ListComplianceStatusCommandInput, ListComplianceStatusCommandOutput } from "../commands/ListComplianceStatusCommand";
import { FMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListComplianceStatus(config: FMSPaginationConfiguration, input: ListComplianceStatusCommandInput, ...additionalArguments: any): Paginator<ListComplianceStatusCommandOutput>;
