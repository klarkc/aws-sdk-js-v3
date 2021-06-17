import { ListDimensionsCommandInput, ListDimensionsCommandOutput } from "../commands/ListDimensionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDimensions(config: IoTPaginationConfiguration, input: ListDimensionsCommandInput, ...additionalArguments: any): Paginator<ListDimensionsCommandOutput>;
