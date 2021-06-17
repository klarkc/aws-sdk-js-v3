import { ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput } from "../commands/ListHumanTaskUisCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHumanTaskUis(config: SageMakerPaginationConfiguration, input: ListHumanTaskUisCommandInput, ...additionalArguments: any): Paginator<ListHumanTaskUisCommandOutput>;
