import { ListInstalledComponentsCommandInput, ListInstalledComponentsCommandOutput } from "../commands/ListInstalledComponentsCommand";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstalledComponents(config: GreengrassV2PaginationConfiguration, input: ListInstalledComponentsCommandInput, ...additionalArguments: any): Paginator<ListInstalledComponentsCommandOutput>;
