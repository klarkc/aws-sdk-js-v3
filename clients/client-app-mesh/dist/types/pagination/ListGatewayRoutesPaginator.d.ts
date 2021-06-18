import { ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput } from "../commands/ListGatewayRoutesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGatewayRoutes(
  config: AppMeshPaginationConfiguration,
  input: ListGatewayRoutesCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewayRoutesCommandOutput>;
