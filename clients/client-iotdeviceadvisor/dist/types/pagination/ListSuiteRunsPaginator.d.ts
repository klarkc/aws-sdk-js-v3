import { ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput } from "../commands/ListSuiteRunsCommand";
import { IotDeviceAdvisorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSuiteRuns(config: IotDeviceAdvisorPaginationConfiguration, input: ListSuiteRunsCommandInput, ...additionalArguments: any): Paginator<ListSuiteRunsCommandOutput>;
