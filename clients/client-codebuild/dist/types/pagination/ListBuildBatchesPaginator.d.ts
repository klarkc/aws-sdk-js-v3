import { ListBuildBatchesCommandInput, ListBuildBatchesCommandOutput } from "../commands/ListBuildBatchesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBuildBatches(config: CodeBuildPaginationConfiguration, input: ListBuildBatchesCommandInput, ...additionalArguments: any): Paginator<ListBuildBatchesCommandOutput>;
