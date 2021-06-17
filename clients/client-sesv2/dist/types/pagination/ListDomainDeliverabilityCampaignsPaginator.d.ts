import { ListDomainDeliverabilityCampaignsCommandInput, ListDomainDeliverabilityCampaignsCommandOutput } from "../commands/ListDomainDeliverabilityCampaignsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomainDeliverabilityCampaigns(config: SESv2PaginationConfiguration, input: ListDomainDeliverabilityCampaignsCommandInput, ...additionalArguments: any): Paginator<ListDomainDeliverabilityCampaignsCommandOutput>;
