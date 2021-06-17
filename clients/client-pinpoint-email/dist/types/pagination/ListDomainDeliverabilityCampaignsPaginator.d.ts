import { ListDomainDeliverabilityCampaignsCommandInput, ListDomainDeliverabilityCampaignsCommandOutput } from "../commands/ListDomainDeliverabilityCampaignsCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomainDeliverabilityCampaigns(config: PinpointEmailPaginationConfiguration, input: ListDomainDeliverabilityCampaignsCommandInput, ...additionalArguments: any): Paginator<ListDomainDeliverabilityCampaignsCommandOutput>;
