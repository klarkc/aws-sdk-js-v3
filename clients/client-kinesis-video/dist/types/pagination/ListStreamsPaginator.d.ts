import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStreams(config: KinesisVideoPaginationConfiguration, input: ListStreamsCommandInput, ...additionalArguments: any): Paginator<ListStreamsCommandOutput>;
