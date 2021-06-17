import { ListProposalsCommandInput, ListProposalsCommandOutput } from "../commands/ListProposalsCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProposals(config: ManagedBlockchainPaginationConfiguration, input: ListProposalsCommandInput, ...additionalArguments: any): Paginator<ListProposalsCommandOutput>;
