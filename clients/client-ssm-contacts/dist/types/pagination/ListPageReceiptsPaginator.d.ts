import { ListPageReceiptsCommandInput, ListPageReceiptsCommandOutput } from "../commands/ListPageReceiptsCommand";
import { SSMContactsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPageReceipts(config: SSMContactsPaginationConfiguration, input: ListPageReceiptsCommandInput, ...additionalArguments: any): Paginator<ListPageReceiptsCommandOutput>;
