import { ListProfileTimesCommandInput, ListProfileTimesCommandOutput } from "../commands/ListProfileTimesCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProfileTimes(config: CodeGuruProfilerPaginationConfiguration, input: ListProfileTimesCommandInput, ...additionalArguments: any): Paginator<ListProfileTimesCommandOutput>;
