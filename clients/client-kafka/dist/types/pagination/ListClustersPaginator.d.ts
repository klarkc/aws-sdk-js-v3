import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListClusters(config: KafkaPaginationConfiguration, input: ListClustersCommandInput, ...additionalArguments: any): Paginator<ListClustersCommandOutput>;
