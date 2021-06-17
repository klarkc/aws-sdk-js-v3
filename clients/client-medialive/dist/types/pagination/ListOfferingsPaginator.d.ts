import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "../commands/ListOfferingsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOfferings(config: MediaLivePaginationConfiguration, input: ListOfferingsCommandInput, ...additionalArguments: any): Paginator<ListOfferingsCommandOutput>;
