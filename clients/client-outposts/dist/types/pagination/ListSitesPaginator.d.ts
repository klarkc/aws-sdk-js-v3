import { ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import { OutpostsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSites(config: OutpostsPaginationConfiguration, input: ListSitesCommandInput, ...additionalArguments: any): Paginator<ListSitesCommandOutput>;
