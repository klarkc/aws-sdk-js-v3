import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "../commands/ListIngestionsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIngestions(config: QuickSightPaginationConfiguration, input: ListIngestionsCommandInput, ...additionalArguments: any): Paginator<ListIngestionsCommandOutput>;
