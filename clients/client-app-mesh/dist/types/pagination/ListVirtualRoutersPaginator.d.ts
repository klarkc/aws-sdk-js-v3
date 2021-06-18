import { ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput } from "../commands/ListVirtualRoutersCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVirtualRouters(
  config: AppMeshPaginationConfiguration,
  input: ListVirtualRoutersCommandInput,
  ...additionalArguments: any
): Paginator<ListVirtualRoutersCommandOutput>;
