import { PollForDecisionTaskCommandInput, PollForDecisionTaskCommandOutput } from "../commands/PollForDecisionTaskCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginatePollForDecisionTask(config: SWFPaginationConfiguration, input: PollForDecisionTaskCommandInput, ...additionalArguments: any): Paginator<PollForDecisionTaskCommandOutput>;
