import { ListPlacementsCommandInput, ListPlacementsCommandOutput } from "../commands/ListPlacementsCommand";
import { IoT1ClickProjectsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPlacements(config: IoT1ClickProjectsPaginationConfiguration, input: ListPlacementsCommandInput, ...additionalArguments: any): Paginator<ListPlacementsCommandOutput>;
