import { ListVirtualClustersCommandInput, ListVirtualClustersCommandOutput } from "../commands/ListVirtualClustersCommand";
import { EMRContainersPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListVirtualClusters(config: EMRContainersPaginationConfiguration, input: ListVirtualClustersCommandInput, ...additionalArguments: any): Paginator<ListVirtualClustersCommandOutput>;
