import { ListCodeRepositoriesCommandInput, ListCodeRepositoriesCommandOutput } from "../commands/ListCodeRepositoriesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCodeRepositories(config: SageMakerPaginationConfiguration, input: ListCodeRepositoriesCommandInput, ...additionalArguments: any): Paginator<ListCodeRepositoriesCommandOutput>;
