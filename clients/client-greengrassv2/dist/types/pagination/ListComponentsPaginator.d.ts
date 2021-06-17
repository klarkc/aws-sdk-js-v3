import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListComponents(config: GreengrassV2PaginationConfiguration, input: ListComponentsCommandInput, ...additionalArguments: any): Paginator<ListComponentsCommandOutput>;
