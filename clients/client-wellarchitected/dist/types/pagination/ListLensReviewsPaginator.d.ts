import { ListLensReviewsCommandInput, ListLensReviewsCommandOutput } from "../commands/ListLensReviewsCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLensReviews(config: WellArchitectedPaginationConfiguration, input: ListLensReviewsCommandInput, ...additionalArguments: any): Paginator<ListLensReviewsCommandOutput>;
