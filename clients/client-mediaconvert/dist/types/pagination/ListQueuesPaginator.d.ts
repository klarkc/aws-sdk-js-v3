import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { MediaConvertPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQueues(config: MediaConvertPaginationConfiguration, input: ListQueuesCommandInput, ...additionalArguments: any): Paginator<ListQueuesCommandOutput>;
