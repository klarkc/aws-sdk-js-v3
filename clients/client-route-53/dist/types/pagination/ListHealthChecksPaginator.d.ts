import { ListHealthChecksCommandInput, ListHealthChecksCommandOutput } from "../commands/ListHealthChecksCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHealthChecks(config: Route53PaginationConfiguration, input: ListHealthChecksCommandInput, ...additionalArguments: any): Paginator<ListHealthChecksCommandOutput>;
