import { ListDeadLetterSourceQueuesCommandInput, ListDeadLetterSourceQueuesCommandOutput } from "../commands/ListDeadLetterSourceQueuesCommand";
import { SQSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeadLetterSourceQueues(config: SQSPaginationConfiguration, input: ListDeadLetterSourceQueuesCommandInput, ...additionalArguments: any): Paginator<ListDeadLetterSourceQueuesCommandOutput>;
