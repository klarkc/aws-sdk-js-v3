import { ListTableColumnsCommandInput, ListTableColumnsCommandOutput } from "../commands/ListTableColumnsCommand";
import { HoneycodePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTableColumns(config: HoneycodePaginationConfiguration, input: ListTableColumnsCommandInput, ...additionalArguments: any): Paginator<ListTableColumnsCommandOutput>;
