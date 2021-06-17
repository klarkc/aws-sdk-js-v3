import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { SQSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQueues(config: SQSPaginationConfiguration, input: ListQueuesCommandInput, ...additionalArguments: any): Paginator<ListQueuesCommandOutput>;
