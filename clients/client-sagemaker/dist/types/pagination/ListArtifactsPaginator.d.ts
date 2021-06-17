import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "../commands/ListArtifactsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListArtifacts(config: SageMakerPaginationConfiguration, input: ListArtifactsCommandInput, ...additionalArguments: any): Paginator<ListArtifactsCommandOutput>;
