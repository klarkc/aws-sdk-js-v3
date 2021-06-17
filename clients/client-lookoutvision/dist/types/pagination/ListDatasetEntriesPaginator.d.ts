import { ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput } from "../commands/ListDatasetEntriesCommand";
import { LookoutVisionPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasetEntries(config: LookoutVisionPaginationConfiguration, input: ListDatasetEntriesCommandInput, ...additionalArguments: any): Paginator<ListDatasetEntriesCommandOutput>;
