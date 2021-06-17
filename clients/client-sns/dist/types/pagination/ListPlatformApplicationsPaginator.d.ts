import { ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput } from "../commands/ListPlatformApplicationsCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPlatformApplications(config: SNSPaginationConfiguration, input: ListPlatformApplicationsCommandInput, ...additionalArguments: any): Paginator<ListPlatformApplicationsCommandOutput>;
