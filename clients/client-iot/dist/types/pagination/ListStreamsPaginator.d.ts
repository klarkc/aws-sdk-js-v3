import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStreams(config: IoTPaginationConfiguration, input: ListStreamsCommandInput, ...additionalArguments: any): Paginator<ListStreamsCommandOutput>;
