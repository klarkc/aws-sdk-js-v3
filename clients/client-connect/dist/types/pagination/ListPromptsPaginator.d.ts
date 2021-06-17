import { ListPromptsCommandInput, ListPromptsCommandOutput } from "../commands/ListPromptsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPrompts(config: ConnectPaginationConfiguration, input: ListPromptsCommandInput, ...additionalArguments: any): Paginator<ListPromptsCommandOutput>;
