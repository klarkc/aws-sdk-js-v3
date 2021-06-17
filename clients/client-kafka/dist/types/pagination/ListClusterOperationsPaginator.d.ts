import { ListClusterOperationsCommandInput, ListClusterOperationsCommandOutput } from "../commands/ListClusterOperationsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListClusterOperations(config: KafkaPaginationConfiguration, input: ListClusterOperationsCommandInput, ...additionalArguments: any): Paginator<ListClusterOperationsCommandOutput>;
