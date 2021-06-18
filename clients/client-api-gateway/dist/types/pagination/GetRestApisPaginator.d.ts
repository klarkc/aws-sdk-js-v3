import { GetRestApisCommandInput, GetRestApisCommandOutput } from "../commands/GetRestApisCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetRestApis(
  config: APIGatewayPaginationConfiguration,
  input: GetRestApisCommandInput,
  ...additionalArguments: any
): Paginator<GetRestApisCommandOutput>;
