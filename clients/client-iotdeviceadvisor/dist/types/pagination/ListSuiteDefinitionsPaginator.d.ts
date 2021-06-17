import { ListSuiteDefinitionsCommandInput, ListSuiteDefinitionsCommandOutput } from "../commands/ListSuiteDefinitionsCommand";
import { IotDeviceAdvisorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSuiteDefinitions(config: IotDeviceAdvisorPaginationConfiguration, input: ListSuiteDefinitionsCommandInput, ...additionalArguments: any): Paginator<ListSuiteDefinitionsCommandOutput>;
