import { ListApprovedOriginsCommandInput, ListApprovedOriginsCommandOutput } from "../commands/ListApprovedOriginsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApprovedOrigins(config: ConnectPaginationConfiguration, input: ListApprovedOriginsCommandInput, ...additionalArguments: any): Paginator<ListApprovedOriginsCommandOutput>;
