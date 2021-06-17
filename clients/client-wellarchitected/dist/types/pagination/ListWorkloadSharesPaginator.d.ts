import { ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput } from "../commands/ListWorkloadSharesCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkloadShares(config: WellArchitectedPaginationConfiguration, input: ListWorkloadSharesCommandInput, ...additionalArguments: any): Paginator<ListWorkloadSharesCommandOutput>;
