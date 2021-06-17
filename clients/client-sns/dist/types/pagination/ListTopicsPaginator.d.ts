import { ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTopics(config: SNSPaginationConfiguration, input: ListTopicsCommandInput, ...additionalArguments: any): Paginator<ListTopicsCommandOutput>;
