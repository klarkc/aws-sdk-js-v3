import { ListTableRowsCommandInput, ListTableRowsCommandOutput } from "../commands/ListTableRowsCommand";
import { HoneycodePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTableRows(config: HoneycodePaginationConfiguration, input: ListTableRowsCommandInput, ...additionalArguments: any): Paginator<ListTableRowsCommandOutput>;
