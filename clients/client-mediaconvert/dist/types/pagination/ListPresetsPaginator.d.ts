import { ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { MediaConvertPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPresets(config: MediaConvertPaginationConfiguration, input: ListPresetsCommandInput, ...additionalArguments: any): Paginator<ListPresetsCommandOutput>;
