import { ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput } from "../commands/ListUniqueProblemsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUniqueProblems(config: DeviceFarmPaginationConfiguration, input: ListUniqueProblemsCommandInput, ...additionalArguments: any): Paginator<ListUniqueProblemsCommandOutput>;
