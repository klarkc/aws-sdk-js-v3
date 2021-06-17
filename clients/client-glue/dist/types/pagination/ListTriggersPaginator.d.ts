import { ListTriggersCommandInput, ListTriggersCommandOutput } from "../commands/ListTriggersCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTriggers(config: GluePaginationConfiguration, input: ListTriggersCommandInput, ...additionalArguments: any): Paginator<ListTriggersCommandOutput>;
