import { ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput } from "../commands/ListOTAUpdatesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOTAUpdates(config: IoTPaginationConfiguration, input: ListOTAUpdatesCommandInput, ...additionalArguments: any): Paginator<ListOTAUpdatesCommandOutput>;
