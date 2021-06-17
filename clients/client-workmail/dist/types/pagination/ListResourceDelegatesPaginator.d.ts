import { ListResourceDelegatesCommandInput, ListResourceDelegatesCommandOutput } from "../commands/ListResourceDelegatesCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResourceDelegates(config: WorkMailPaginationConfiguration, input: ListResourceDelegatesCommandInput, ...additionalArguments: any): Paginator<ListResourceDelegatesCommandOutput>;
