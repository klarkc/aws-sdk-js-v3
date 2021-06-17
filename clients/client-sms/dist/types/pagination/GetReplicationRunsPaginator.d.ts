import { GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput } from "../commands/GetReplicationRunsCommand";
import { SMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetReplicationRuns(config: SMSPaginationConfiguration, input: GetReplicationRunsCommandInput, ...additionalArguments: any): Paginator<GetReplicationRunsCommandOutput>;
