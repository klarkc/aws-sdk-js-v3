import { ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput } from "../commands/ListVirtualNodesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVirtualNodes(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualNodesCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualNodesCommandOutput>;
