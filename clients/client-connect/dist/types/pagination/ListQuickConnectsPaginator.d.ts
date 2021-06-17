import { ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput } from "../commands/ListQuickConnectsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQuickConnects(config: ConnectPaginationConfiguration, input: ListQuickConnectsCommandInput, ...additionalArguments: any): Paginator<ListQuickConnectsCommandOutput>;
