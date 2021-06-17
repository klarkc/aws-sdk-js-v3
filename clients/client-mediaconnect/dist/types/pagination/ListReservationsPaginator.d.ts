import { ListReservationsCommandInput, ListReservationsCommandOutput } from "../commands/ListReservationsCommand";
import { MediaConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReservations(config: MediaConnectPaginationConfiguration, input: ListReservationsCommandInput, ...additionalArguments: any): Paginator<ListReservationsCommandOutput>;
