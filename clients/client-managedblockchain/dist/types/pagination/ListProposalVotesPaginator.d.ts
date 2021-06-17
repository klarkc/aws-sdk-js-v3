import { ListProposalVotesCommandInput, ListProposalVotesCommandOutput } from "../commands/ListProposalVotesCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProposalVotes(config: ManagedBlockchainPaginationConfiguration, input: ListProposalVotesCommandInput, ...additionalArguments: any): Paginator<ListProposalVotesCommandOutput>;
