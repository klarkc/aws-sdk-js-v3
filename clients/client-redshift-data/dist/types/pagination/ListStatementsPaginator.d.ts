import { ListStatementsCommandInput, ListStatementsCommandOutput } from "../commands/ListStatementsCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStatements(config: RedshiftDataPaginationConfiguration, input: ListStatementsCommandInput, ...additionalArguments: any): Paginator<ListStatementsCommandOutput>;
