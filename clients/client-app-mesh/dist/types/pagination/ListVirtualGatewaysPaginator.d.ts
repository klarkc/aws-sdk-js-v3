import {
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "../commands/ListVirtualGatewaysCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVirtualGateways(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualGatewaysCommandOutput>;
