import { ListReviewPolicyResultsForHITCommandInput, ListReviewPolicyResultsForHITCommandOutput } from "../commands/ListReviewPolicyResultsForHITCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReviewPolicyResultsForHIT(config: MTurkPaginationConfiguration, input: ListReviewPolicyResultsForHITCommandInput, ...additionalArguments: any): Paginator<ListReviewPolicyResultsForHITCommandOutput>;
