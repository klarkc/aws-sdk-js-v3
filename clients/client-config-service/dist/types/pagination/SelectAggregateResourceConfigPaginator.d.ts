import { SelectAggregateResourceConfigCommandInput, SelectAggregateResourceConfigCommandOutput } from "../commands/SelectAggregateResourceConfigCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSelectAggregateResourceConfig(config: ConfigServicePaginationConfiguration, input: SelectAggregateResourceConfigCommandInput, ...additionalArguments: any): Paginator<SelectAggregateResourceConfigCommandOutput>;
