import { GetStatementResultCommandInput, GetStatementResultCommandOutput } from "../commands/GetStatementResultCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetStatementResult(config: RedshiftDataPaginationConfiguration, input: GetStatementResultCommandInput, ...additionalArguments: any): Paginator<GetStatementResultCommandOutput>;
