import { ListJournalS3ExportsCommandInput, ListJournalS3ExportsCommandOutput } from "../commands/ListJournalS3ExportsCommand";
import { QLDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJournalS3Exports(config: QLDBPaginationConfiguration, input: ListJournalS3ExportsCommandInput, ...additionalArguments: any): Paginator<ListJournalS3ExportsCommandOutput>;
