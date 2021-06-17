import { ListAttributesCommandInput, ListAttributesCommandOutput } from "../commands/ListAttributesCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAttributes(config: ECSPaginationConfiguration, input: ListAttributesCommandInput, ...additionalArguments: any): Paginator<ListAttributesCommandOutput>;
