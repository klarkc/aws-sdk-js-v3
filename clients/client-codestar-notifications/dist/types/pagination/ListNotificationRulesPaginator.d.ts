import { ListNotificationRulesCommandInput, ListNotificationRulesCommandOutput } from "../commands/ListNotificationRulesCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNotificationRules(config: CodestarNotificationsPaginationConfiguration, input: ListNotificationRulesCommandInput, ...additionalArguments: any): Paginator<ListNotificationRulesCommandOutput>;
