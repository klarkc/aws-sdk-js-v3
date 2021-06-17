import { ListTargetsCommandInput, ListTargetsCommandOutput } from "../commands/ListTargetsCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTargets(config: CodestarNotificationsPaginationConfiguration, input: ListTargetsCommandInput, ...additionalArguments: any): Paginator<ListTargetsCommandOutput>;
