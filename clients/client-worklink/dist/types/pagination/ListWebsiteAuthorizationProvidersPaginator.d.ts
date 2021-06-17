import { ListWebsiteAuthorizationProvidersCommandInput, ListWebsiteAuthorizationProvidersCommandOutput } from "../commands/ListWebsiteAuthorizationProvidersCommand";
import { WorkLinkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWebsiteAuthorizationProviders(config: WorkLinkPaginationConfiguration, input: ListWebsiteAuthorizationProvidersCommandInput, ...additionalArguments: any): Paginator<ListWebsiteAuthorizationProvidersCommandOutput>;
