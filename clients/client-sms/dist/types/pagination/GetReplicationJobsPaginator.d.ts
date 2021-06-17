import { GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput } from "../commands/GetReplicationJobsCommand";
import { SMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetReplicationJobs(config: SMSPaginationConfiguration, input: GetReplicationJobsCommandInput, ...additionalArguments: any): Paginator<GetReplicationJobsCommandOutput>;
