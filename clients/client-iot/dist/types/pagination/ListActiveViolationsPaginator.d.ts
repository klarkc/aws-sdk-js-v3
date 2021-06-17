import { ListActiveViolationsCommandInput, ListActiveViolationsCommandOutput } from "../commands/ListActiveViolationsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListActiveViolations(config: IoTPaginationConfiguration, input: ListActiveViolationsCommandInput, ...additionalArguments: any): Paginator<ListActiveViolationsCommandOutput>;
