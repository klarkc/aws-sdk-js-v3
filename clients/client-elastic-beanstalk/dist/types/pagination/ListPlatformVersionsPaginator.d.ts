import { ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput } from "../commands/ListPlatformVersionsCommand";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPlatformVersions(config: ElasticBeanstalkPaginationConfiguration, input: ListPlatformVersionsCommandInput, ...additionalArguments: any): Paginator<ListPlatformVersionsCommandOutput>;
