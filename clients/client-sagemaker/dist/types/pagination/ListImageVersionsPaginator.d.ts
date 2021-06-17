import { ListImageVersionsCommandInput, ListImageVersionsCommandOutput } from "../commands/ListImageVersionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImageVersions(config: SageMakerPaginationConfiguration, input: ListImageVersionsCommandInput, ...additionalArguments: any): Paginator<ListImageVersionsCommandOutput>;
