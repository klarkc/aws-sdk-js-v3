import { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "../commands/ListCrawlersCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCrawlers(config: GluePaginationConfiguration, input: ListCrawlersCommandInput, ...additionalArguments: any): Paginator<ListCrawlersCommandOutput>;
