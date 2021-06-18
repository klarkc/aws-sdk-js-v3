import { GetApiKeysCommandInput, GetApiKeysCommandOutput } from "../commands/GetApiKeysCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetApiKeys(
  config: APIGatewayPaginationConfiguration,
  input: GetApiKeysCommandInput,
  ...additionalArguments: any
): Paginator<GetApiKeysCommandOutput>;
