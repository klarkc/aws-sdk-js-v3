import { ListVodSourcesCommandInput, ListVodSourcesCommandOutput } from "../commands/ListVodSourcesCommand";
import { MediaTailorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVodSources(config: MediaTailorPaginationConfiguration, input: ListVodSourcesCommandInput, ...additionalArguments: any): Paginator<ListVodSourcesCommandOutput>;
