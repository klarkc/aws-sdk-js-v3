import { GetReservedNodeExchangeOfferingsCommandInput, GetReservedNodeExchangeOfferingsCommandOutput } from "../commands/GetReservedNodeExchangeOfferingsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetReservedNodeExchangeOfferings(config: RedshiftPaginationConfiguration, input: GetReservedNodeExchangeOfferingsCommandInput, ...additionalArguments: any): Paginator<GetReservedNodeExchangeOfferingsCommandOutput>;
