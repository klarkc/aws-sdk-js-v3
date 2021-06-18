import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "../commands/GetVpcLinksCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetVpcLinks(
  config: APIGatewayPaginationConfiguration,
  input: GetVpcLinksCommandInput,
  ...additionalArguments: any
): Paginator<GetVpcLinksCommandOutput>;
