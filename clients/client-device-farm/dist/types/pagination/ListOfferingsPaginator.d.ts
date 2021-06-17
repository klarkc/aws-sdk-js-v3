import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "../commands/ListOfferingsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOfferings(config: DeviceFarmPaginationConfiguration, input: ListOfferingsCommandInput, ...additionalArguments: any): Paginator<ListOfferingsCommandOutput>;
