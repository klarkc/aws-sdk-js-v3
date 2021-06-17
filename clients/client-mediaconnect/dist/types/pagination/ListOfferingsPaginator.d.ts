import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "../commands/ListOfferingsCommand";
import { MediaConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOfferings(config: MediaConnectPaginationConfiguration, input: ListOfferingsCommandInput, ...additionalArguments: any): Paginator<ListOfferingsCommandOutput>;
