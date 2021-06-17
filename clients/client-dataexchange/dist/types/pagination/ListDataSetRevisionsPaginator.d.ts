import { ListDataSetRevisionsCommandInput, ListDataSetRevisionsCommandOutput } from "../commands/ListDataSetRevisionsCommand";
import { DataExchangePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataSetRevisions(config: DataExchangePaginationConfiguration, input: ListDataSetRevisionsCommandInput, ...additionalArguments: any): Paginator<ListDataSetRevisionsCommandOutput>;
