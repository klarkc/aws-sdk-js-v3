import { GetLinkAssociationsCommandInput, GetLinkAssociationsCommandOutput } from "../commands/GetLinkAssociationsCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetLinkAssociations(config: NetworkManagerPaginationConfiguration, input: GetLinkAssociationsCommandInput, ...additionalArguments: any): Paginator<GetLinkAssociationsCommandOutput>;
