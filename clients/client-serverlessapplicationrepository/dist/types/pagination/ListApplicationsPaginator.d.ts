import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApplications(config: ServerlessApplicationRepositoryPaginationConfiguration, input: ListApplicationsCommandInput, ...additionalArguments: any): Paginator<ListApplicationsCommandOutput>;
