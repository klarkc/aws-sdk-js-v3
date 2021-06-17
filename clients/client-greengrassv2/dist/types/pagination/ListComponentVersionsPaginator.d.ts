import { ListComponentVersionsCommandInput, ListComponentVersionsCommandOutput } from "../commands/ListComponentVersionsCommand";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListComponentVersions(config: GreengrassV2PaginationConfiguration, input: ListComponentVersionsCommandInput, ...additionalArguments: any): Paginator<ListComponentVersionsCommandOutput>;
