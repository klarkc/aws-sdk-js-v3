import { ListJournalS3ExportsForLedgerCommandInput, ListJournalS3ExportsForLedgerCommandOutput } from "../commands/ListJournalS3ExportsForLedgerCommand";
import { QLDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJournalS3ExportsForLedger(config: QLDBPaginationConfiguration, input: ListJournalS3ExportsForLedgerCommandInput, ...additionalArguments: any): Paginator<ListJournalS3ExportsForLedgerCommandOutput>;
