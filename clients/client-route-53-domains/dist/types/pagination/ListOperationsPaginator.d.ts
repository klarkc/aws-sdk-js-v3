import { ListOperationsCommandInput, ListOperationsCommandOutput } from "../commands/ListOperationsCommand";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOperations(config: Route53DomainsPaginationConfiguration, input: ListOperationsCommandInput, ...additionalArguments: any): Paginator<ListOperationsCommandOutput>;
