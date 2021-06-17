import { ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput } from "../commands/ListWorkerBlocksCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkerBlocks(config: MTurkPaginationConfiguration, input: ListWorkerBlocksCommandInput, ...additionalArguments: any): Paginator<ListWorkerBlocksCommandOutput>;
