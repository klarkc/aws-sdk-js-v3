import { ListAccessesCommandInput, ListAccessesCommandOutput } from "../commands/ListAccessesCommand";
import { TransferPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccesses(config: TransferPaginationConfiguration, input: ListAccessesCommandInput, ...additionalArguments: any): Paginator<ListAccessesCommandOutput>;
