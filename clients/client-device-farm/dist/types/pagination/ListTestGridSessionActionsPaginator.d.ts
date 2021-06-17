import { ListTestGridSessionActionsCommandInput, ListTestGridSessionActionsCommandOutput } from "../commands/ListTestGridSessionActionsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTestGridSessionActions(config: DeviceFarmPaginationConfiguration, input: ListTestGridSessionActionsCommandInput, ...additionalArguments: any): Paginator<ListTestGridSessionActionsCommandOutput>;
