import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "../commands/ListNamespacesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNamespaces(config: QuickSightPaginationConfiguration, input: ListNamespacesCommandInput, ...additionalArguments: any): Paginator<ListNamespacesCommandOutput>;
