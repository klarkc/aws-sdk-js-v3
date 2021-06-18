import { GetUsageCommandInput, GetUsageCommandOutput } from "../commands/GetUsageCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetUsage(
  config: APIGatewayPaginationConfiguration,
  input: GetUsageCommandInput,
  ...additionalArguments: any
): Paginator<GetUsageCommandOutput>;
