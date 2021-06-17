import { ListSigningJobsCommandInput, ListSigningJobsCommandOutput } from "../commands/ListSigningJobsCommand";
import { SignerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSigningJobs(config: SignerPaginationConfiguration, input: ListSigningJobsCommandInput, ...additionalArguments: any): Paginator<ListSigningJobsCommandOutput>;
