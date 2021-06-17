import { ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput } from "../commands/ListProgressUpdateStreamsCommand";
import { MigrationHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProgressUpdateStreams(config: MigrationHubPaginationConfiguration, input: ListProgressUpdateStreamsCommandInput, ...additionalArguments: any): Paginator<ListProgressUpdateStreamsCommandOutput>;
