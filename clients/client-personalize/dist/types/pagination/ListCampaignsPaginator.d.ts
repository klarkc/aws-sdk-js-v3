import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "../commands/ListCampaignsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCampaigns(config: PersonalizePaginationConfiguration, input: ListCampaignsCommandInput, ...additionalArguments: any): Paginator<ListCampaignsCommandOutput>;
