import { ListDatasetContentsCommandInput, ListDatasetContentsCommandOutput } from "../commands/ListDatasetContentsCommand";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasetContents(config: IoTAnalyticsPaginationConfiguration, input: ListDatasetContentsCommandInput, ...additionalArguments: any): Paginator<ListDatasetContentsCommandOutput>;
