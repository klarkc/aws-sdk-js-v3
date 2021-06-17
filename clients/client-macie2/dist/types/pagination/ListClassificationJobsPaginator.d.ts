import { ListClassificationJobsCommandInput, ListClassificationJobsCommandOutput } from "../commands/ListClassificationJobsCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListClassificationJobs(config: Macie2PaginationConfiguration, input: ListClassificationJobsCommandInput, ...additionalArguments: any): Paginator<ListClassificationJobsCommandOutput>;
