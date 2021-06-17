import { ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput } from "../commands/ListSnapshotBlocksCommand";
import { EBSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSnapshotBlocks(config: EBSPaginationConfiguration, input: ListSnapshotBlocksCommandInput, ...additionalArguments: any): Paginator<ListSnapshotBlocksCommandOutput>;
