import { ListV2LoggingLevelsCommandInput, ListV2LoggingLevelsCommandOutput } from "../commands/ListV2LoggingLevelsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListV2LoggingLevels(config: IoTPaginationConfiguration, input: ListV2LoggingLevelsCommandInput, ...additionalArguments: any): Paginator<ListV2LoggingLevelsCommandOutput>;
