import { ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput } from "../commands/ListChangedBlocksCommand";
import { EBSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChangedBlocks(config: EBSPaginationConfiguration, input: ListChangedBlocksCommandInput, ...additionalArguments: any): Paginator<ListChangedBlocksCommandOutput>;
