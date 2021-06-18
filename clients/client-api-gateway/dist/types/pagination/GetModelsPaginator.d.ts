import { GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetModels(
  config: APIGatewayPaginationConfiguration,
  input: GetModelsCommandInput,
  ...additionalArguments: any
): Paginator<GetModelsCommandOutput>;
