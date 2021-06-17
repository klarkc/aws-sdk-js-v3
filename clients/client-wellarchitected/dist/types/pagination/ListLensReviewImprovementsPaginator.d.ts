import { ListLensReviewImprovementsCommandInput, ListLensReviewImprovementsCommandOutput } from "../commands/ListLensReviewImprovementsCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLensReviewImprovements(config: WellArchitectedPaginationConfiguration, input: ListLensReviewImprovementsCommandInput, ...additionalArguments: any): Paginator<ListLensReviewImprovementsCommandOutput>;
