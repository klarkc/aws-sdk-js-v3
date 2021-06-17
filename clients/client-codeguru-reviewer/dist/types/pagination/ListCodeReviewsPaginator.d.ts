import { ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput } from "../commands/ListCodeReviewsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCodeReviews(config: CodeGuruReviewerPaginationConfiguration, input: ListCodeReviewsCommandInput, ...additionalArguments: any): Paginator<ListCodeReviewsCommandOutput>;
