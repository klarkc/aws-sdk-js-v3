import { GetResourceSharesCommandInput, GetResourceSharesCommandOutput } from "../commands/GetResourceSharesCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetResourceShares(config: RAMPaginationConfiguration, input: GetResourceSharesCommandInput, ...additionalArguments: any): Paginator<GetResourceSharesCommandOutput>;
