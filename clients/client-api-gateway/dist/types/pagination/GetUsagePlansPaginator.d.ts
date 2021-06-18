import { GetUsagePlansCommandInput, GetUsagePlansCommandOutput } from "../commands/GetUsagePlansCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetUsagePlans(
  config: APIGatewayPaginationConfiguration,
  input: GetUsagePlansCommandInput,
  ...additionalArguments: any
): Paginator<GetUsagePlansCommandOutput>;
