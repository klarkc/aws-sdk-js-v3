import { ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNodes(config: KafkaPaginationConfiguration, input: ListNodesCommandInput, ...additionalArguments: any): Paginator<ListNodesCommandOutput>;
