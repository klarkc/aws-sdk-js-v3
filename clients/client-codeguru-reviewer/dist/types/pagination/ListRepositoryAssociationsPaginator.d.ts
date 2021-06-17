import { ListRepositoryAssociationsCommandInput, ListRepositoryAssociationsCommandOutput } from "../commands/ListRepositoryAssociationsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRepositoryAssociations(config: CodeGuruReviewerPaginationConfiguration, input: ListRepositoryAssociationsCommandInput, ...additionalArguments: any): Paginator<ListRepositoryAssociationsCommandOutput>;
