import { ListEntitlementsCommandInput, ListEntitlementsCommandOutput } from "../commands/ListEntitlementsCommand";
import { MediaConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEntitlements(config: MediaConnectPaginationConfiguration, input: ListEntitlementsCommandInput, ...additionalArguments: any): Paginator<ListEntitlementsCommandOutput>;
