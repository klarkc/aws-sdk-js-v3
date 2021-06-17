import { ListScheduledAuditsCommandInput, ListScheduledAuditsCommandOutput } from "../commands/ListScheduledAuditsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListScheduledAudits(config: IoTPaginationConfiguration, input: ListScheduledAuditsCommandInput, ...additionalArguments: any): Paginator<ListScheduledAuditsCommandOutput>;
