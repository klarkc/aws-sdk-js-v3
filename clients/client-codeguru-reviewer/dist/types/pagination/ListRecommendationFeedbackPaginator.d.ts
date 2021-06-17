import { ListRecommendationFeedbackCommandInput, ListRecommendationFeedbackCommandOutput } from "../commands/ListRecommendationFeedbackCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRecommendationFeedback(config: CodeGuruReviewerPaginationConfiguration, input: ListRecommendationFeedbackCommandInput, ...additionalArguments: any): Paginator<ListRecommendationFeedbackCommandOutput>;
