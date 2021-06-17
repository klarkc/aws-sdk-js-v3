import { ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput } from "../commands/ListReviewableHITsCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReviewableHITs(config: MTurkPaginationConfiguration, input: ListReviewableHITsCommandInput, ...additionalArguments: any): Paginator<ListReviewableHITsCommandOutput>;
