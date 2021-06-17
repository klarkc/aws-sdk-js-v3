import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { IoTFleetHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApplications(config: IoTFleetHubPaginationConfiguration, input: ListApplicationsCommandInput, ...additionalArguments: any): Paginator<ListApplicationsCommandOutput>;
