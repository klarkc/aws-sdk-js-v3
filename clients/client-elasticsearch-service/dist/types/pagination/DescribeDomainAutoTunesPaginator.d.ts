import { DescribeDomainAutoTunesCommandInput, DescribeDomainAutoTunesCommandOutput } from "../commands/DescribeDomainAutoTunesCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDomainAutoTunes(config: ElasticsearchServicePaginationConfiguration, input: DescribeDomainAutoTunesCommandInput, ...additionalArguments: any): Paginator<DescribeDomainAutoTunesCommandOutput>;
