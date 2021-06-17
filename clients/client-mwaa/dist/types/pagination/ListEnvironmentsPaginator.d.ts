import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import { MWAAPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEnvironments(config: MWAAPaginationConfiguration, input: ListEnvironmentsCommandInput, ...additionalArguments: any): Paginator<ListEnvironmentsCommandOutput>;
