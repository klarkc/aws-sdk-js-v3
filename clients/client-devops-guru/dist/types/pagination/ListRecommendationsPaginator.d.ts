import { ListRecommendationsCommandInput, ListRecommendationsCommandOutput } from "../commands/ListRecommendationsCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRecommendations(config: DevOpsGuruPaginationConfiguration, input: ListRecommendationsCommandInput, ...additionalArguments: any): Paginator<ListRecommendationsCommandOutput>;
