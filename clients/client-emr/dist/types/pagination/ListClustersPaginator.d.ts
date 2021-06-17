import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListClusters(config: EMRPaginationConfiguration, input: ListClustersCommandInput, ...additionalArguments: any): Paginator<ListClustersCommandOutput>;
