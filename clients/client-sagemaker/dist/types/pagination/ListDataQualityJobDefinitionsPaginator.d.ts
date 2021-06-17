import { ListDataQualityJobDefinitionsCommandInput, ListDataQualityJobDefinitionsCommandOutput } from "../commands/ListDataQualityJobDefinitionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataQualityJobDefinitions(config: SageMakerPaginationConfiguration, input: ListDataQualityJobDefinitionsCommandInput, ...additionalArguments: any): Paginator<ListDataQualityJobDefinitionsCommandOutput>;
