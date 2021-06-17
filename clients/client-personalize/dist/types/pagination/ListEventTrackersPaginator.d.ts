import { ListEventTrackersCommandInput, ListEventTrackersCommandOutput } from "../commands/ListEventTrackersCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEventTrackers(config: PersonalizePaginationConfiguration, input: ListEventTrackersCommandInput, ...additionalArguments: any): Paginator<ListEventTrackersCommandOutput>;
