import { ListLedgersCommandInput, ListLedgersCommandOutput } from "../commands/ListLedgersCommand";
import { QLDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLedgers(config: QLDBPaginationConfiguration, input: ListLedgersCommandInput, ...additionalArguments: any): Paginator<ListLedgersCommandOutput>;
