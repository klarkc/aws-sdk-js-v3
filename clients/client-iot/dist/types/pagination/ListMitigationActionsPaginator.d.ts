import { ListMitigationActionsCommandInput, ListMitigationActionsCommandOutput } from "../commands/ListMitigationActionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMitigationActions(config: IoTPaginationConfiguration, input: ListMitigationActionsCommandInput, ...additionalArguments: any): Paginator<ListMitigationActionsCommandOutput>;
