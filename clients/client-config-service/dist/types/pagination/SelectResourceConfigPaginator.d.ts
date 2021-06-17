import { SelectResourceConfigCommandInput, SelectResourceConfigCommandOutput } from "../commands/SelectResourceConfigCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSelectResourceConfig(config: ConfigServicePaginationConfiguration, input: SelectResourceConfigCommandInput, ...additionalArguments: any): Paginator<SelectResourceConfigCommandOutput>;
