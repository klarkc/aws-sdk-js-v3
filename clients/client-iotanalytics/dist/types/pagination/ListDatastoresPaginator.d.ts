import { ListDatastoresCommandInput, ListDatastoresCommandOutput } from "../commands/ListDatastoresCommand";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatastores(config: IoTAnalyticsPaginationConfiguration, input: ListDatastoresCommandInput, ...additionalArguments: any): Paginator<ListDatastoresCommandOutput>;
