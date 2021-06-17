import { DescribeFolderContentsCommandInput, DescribeFolderContentsCommandOutput } from "../commands/DescribeFolderContentsCommand";
import { WorkDocsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeFolderContents(config: WorkDocsPaginationConfiguration, input: DescribeFolderContentsCommandInput, ...additionalArguments: any): Paginator<DescribeFolderContentsCommandOutput>;
