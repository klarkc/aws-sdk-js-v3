import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApplications(config: CodeDeployPaginationConfiguration, input: ListApplicationsCommandInput, ...additionalArguments: any): Paginator<ListApplicationsCommandOutput>;
