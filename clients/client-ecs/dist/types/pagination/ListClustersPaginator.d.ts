import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListClusters(config: ECSPaginationConfiguration, input: ListClustersCommandInput, ...additionalArguments: any): Paginator<ListClustersCommandOutput>;
