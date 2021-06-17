import { ListTestGridSessionsCommandInput, ListTestGridSessionsCommandOutput } from "../commands/ListTestGridSessionsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTestGridSessions(config: DeviceFarmPaginationConfiguration, input: ListTestGridSessionsCommandInput, ...additionalArguments: any): Paginator<ListTestGridSessionsCommandOutput>;
