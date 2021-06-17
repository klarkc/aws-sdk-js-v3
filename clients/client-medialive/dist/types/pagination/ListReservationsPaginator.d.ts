import { ListReservationsCommandInput, ListReservationsCommandOutput } from "../commands/ListReservationsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReservations(config: MediaLivePaginationConfiguration, input: ListReservationsCommandInput, ...additionalArguments: any): Paginator<ListReservationsCommandOutput>;
