import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListComponents(config: ImagebuilderPaginationConfiguration, input: ListComponentsCommandInput, ...additionalArguments: any): Paginator<ListComponentsCommandOutput>;
