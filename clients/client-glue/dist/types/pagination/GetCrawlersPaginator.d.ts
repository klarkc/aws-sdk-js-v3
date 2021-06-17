import { GetCrawlersCommandInput, GetCrawlersCommandOutput } from "../commands/GetCrawlersCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCrawlers(config: GluePaginationConfiguration, input: GetCrawlersCommandInput, ...additionalArguments: any): Paginator<GetCrawlersCommandOutput>;
