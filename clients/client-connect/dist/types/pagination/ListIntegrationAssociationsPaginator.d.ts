import { ListIntegrationAssociationsCommandInput, ListIntegrationAssociationsCommandOutput } from "../commands/ListIntegrationAssociationsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIntegrationAssociations(config: ConnectPaginationConfiguration, input: ListIntegrationAssociationsCommandInput, ...additionalArguments: any): Paginator<ListIntegrationAssociationsCommandOutput>;
