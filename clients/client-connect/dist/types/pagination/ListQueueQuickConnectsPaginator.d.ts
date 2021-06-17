import { ListQueueQuickConnectsCommandInput, ListQueueQuickConnectsCommandOutput } from "../commands/ListQueueQuickConnectsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQueueQuickConnects(config: ConnectPaginationConfiguration, input: ListQueueQuickConnectsCommandInput, ...additionalArguments: any): Paginator<ListQueueQuickConnectsCommandOutput>;
