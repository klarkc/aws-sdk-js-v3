import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "../commands/ListWorkloadsCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkloads(config: WellArchitectedPaginationConfiguration, input: ListWorkloadsCommandInput, ...additionalArguments: any): Paginator<ListWorkloadsCommandOutput>;
