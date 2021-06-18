import {
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "../commands/GetBasePathMappingsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBasePathMappings(
  config: APIGatewayPaginationConfiguration,
  input: GetBasePathMappingsCommandInput,
  ...additionalArguments: any
): Paginator<GetBasePathMappingsCommandOutput>;
