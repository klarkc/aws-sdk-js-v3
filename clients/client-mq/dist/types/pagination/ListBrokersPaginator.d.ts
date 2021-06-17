import { ListBrokersCommandInput, ListBrokersCommandOutput } from "../commands/ListBrokersCommand";
import { MqPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBrokers(config: MqPaginationConfiguration, input: ListBrokersCommandInput, ...additionalArguments: any): Paginator<ListBrokersCommandOutput>;
