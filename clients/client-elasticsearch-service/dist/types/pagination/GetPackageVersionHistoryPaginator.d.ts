import { GetPackageVersionHistoryCommandInput, GetPackageVersionHistoryCommandOutput } from "../commands/GetPackageVersionHistoryCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetPackageVersionHistory(config: ElasticsearchServicePaginationConfiguration, input: GetPackageVersionHistoryCommandInput, ...additionalArguments: any): Paginator<GetPackageVersionHistoryCommandOutput>;
