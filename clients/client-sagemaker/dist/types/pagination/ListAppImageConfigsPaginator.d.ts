import { ListAppImageConfigsCommandInput, ListAppImageConfigsCommandOutput } from "../commands/ListAppImageConfigsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAppImageConfigs(config: SageMakerPaginationConfiguration, input: ListAppImageConfigsCommandInput, ...additionalArguments: any): Paginator<ListAppImageConfigsCommandOutput>;
