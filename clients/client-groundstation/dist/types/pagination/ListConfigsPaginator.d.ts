import { ListConfigsCommandInput, ListConfigsCommandOutput } from "../commands/ListConfigsCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConfigs(config: GroundStationPaginationConfiguration, input: ListConfigsCommandInput, ...additionalArguments: any): Paginator<ListConfigsCommandOutput>;
