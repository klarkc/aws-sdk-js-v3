import { GetLinksCommandInput, GetLinksCommandOutput } from "../commands/GetLinksCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetLinks(config: NetworkManagerPaginationConfiguration, input: GetLinksCommandInput, ...additionalArguments: any): Paginator<GetLinksCommandOutput>;
