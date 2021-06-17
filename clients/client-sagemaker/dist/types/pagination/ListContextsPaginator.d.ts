import { ListContextsCommandInput, ListContextsCommandOutput } from "../commands/ListContextsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContexts(config: SageMakerPaginationConfiguration, input: ListContextsCommandInput, ...additionalArguments: any): Paginator<ListContextsCommandOutput>;
