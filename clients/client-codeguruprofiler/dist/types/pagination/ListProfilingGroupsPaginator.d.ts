import { ListProfilingGroupsCommandInput, ListProfilingGroupsCommandOutput } from "../commands/ListProfilingGroupsCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProfilingGroups(config: CodeGuruProfilerPaginationConfiguration, input: ListProfilingGroupsCommandInput, ...additionalArguments: any): Paginator<ListProfilingGroupsCommandOutput>;
