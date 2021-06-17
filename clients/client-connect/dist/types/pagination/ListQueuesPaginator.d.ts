import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQueues(config: ConnectPaginationConfiguration, input: ListQueuesCommandInput, ...additionalArguments: any): Paginator<ListQueuesCommandOutput>;
