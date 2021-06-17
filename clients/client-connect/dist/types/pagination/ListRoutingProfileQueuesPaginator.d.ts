import { ListRoutingProfileQueuesCommandInput, ListRoutingProfileQueuesCommandOutput } from "../commands/ListRoutingProfileQueuesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRoutingProfileQueues(config: ConnectPaginationConfiguration, input: ListRoutingProfileQueuesCommandInput, ...additionalArguments: any): Paginator<ListRoutingProfileQueuesCommandOutput>;
