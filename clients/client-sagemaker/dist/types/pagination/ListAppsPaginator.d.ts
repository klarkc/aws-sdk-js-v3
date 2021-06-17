import { ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApps(config: SageMakerPaginationConfiguration, input: ListAppsCommandInput, ...additionalArguments: any): Paginator<ListAppsCommandOutput>;
