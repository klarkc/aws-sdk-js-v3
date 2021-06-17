import { ListHostedZonesCommandInput, ListHostedZonesCommandOutput } from "../commands/ListHostedZonesCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHostedZones(config: Route53PaginationConfiguration, input: ListHostedZonesCommandInput, ...additionalArguments: any): Paginator<ListHostedZonesCommandOutput>;
