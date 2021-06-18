import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "../commands/GetDomainNamesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDomainNames(
  config: APIGatewayPaginationConfiguration,
  input: GetDomainNamesCommandInput,
  ...additionalArguments: any
): Paginator<GetDomainNamesCommandOutput>;
