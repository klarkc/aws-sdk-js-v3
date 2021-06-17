import { ListRecommendationsCommandInput, ListRecommendationsCommandOutput } from "../commands/ListRecommendationsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRecommendations(config: CodeGuruReviewerPaginationConfiguration, input: ListRecommendationsCommandInput, ...additionalArguments: any): Paginator<ListRecommendationsCommandOutput>;
