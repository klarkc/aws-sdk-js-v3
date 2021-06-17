import { GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput } from "../commands/GetUpgradeHistoryCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetUpgradeHistory(config: ElasticsearchServicePaginationConfiguration, input: GetUpgradeHistoryCommandInput, ...additionalArguments: any): Paginator<GetUpgradeHistoryCommandOutput>;
