import { ListTaskDefinitionsCommandInput, ListTaskDefinitionsCommandOutput } from "../commands/ListTaskDefinitionsCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTaskDefinitions(config: ECSPaginationConfiguration, input: ListTaskDefinitionsCommandInput, ...additionalArguments: any): Paginator<ListTaskDefinitionsCommandOutput>;
