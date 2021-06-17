import { ListBundlesCommandInput, ListBundlesCommandOutput } from "../commands/ListBundlesCommand";
import { MobilePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBundles(config: MobilePaginationConfiguration, input: ListBundlesCommandInput, ...additionalArguments: any): Paginator<ListBundlesCommandOutput>;
