import { ListKafkaVersionsCommandInput, ListKafkaVersionsCommandOutput } from "../commands/ListKafkaVersionsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListKafkaVersions(config: KafkaPaginationConfiguration, input: ListKafkaVersionsCommandInput, ...additionalArguments: any): Paginator<ListKafkaVersionsCommandOutput>;
