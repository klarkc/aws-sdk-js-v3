import { ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput } from "../commands/ListHarvestJobsCommand";
import { MediaPackagePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHarvestJobs(config: MediaPackagePaginationConfiguration, input: ListHarvestJobsCommandInput, ...additionalArguments: any): Paginator<ListHarvestJobsCommandOutput>;
