import { ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput } from "../commands/ListLayerVersionsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLayerVersions(config: LambdaPaginationConfiguration, input: ListLayerVersionsCommandInput, ...additionalArguments: any): Paginator<ListLayerVersionsCommandOutput>;
