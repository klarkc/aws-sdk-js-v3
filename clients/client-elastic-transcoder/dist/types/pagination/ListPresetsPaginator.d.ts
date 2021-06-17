import { ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPresets(config: ElasticTranscoderPaginationConfiguration, input: ListPresetsCommandInput, ...additionalArguments: any): Paginator<ListPresetsCommandOutput>;
