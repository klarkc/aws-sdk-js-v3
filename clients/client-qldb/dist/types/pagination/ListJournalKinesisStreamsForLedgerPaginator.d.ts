import { ListJournalKinesisStreamsForLedgerCommandInput, ListJournalKinesisStreamsForLedgerCommandOutput } from "../commands/ListJournalKinesisStreamsForLedgerCommand";
import { QLDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJournalKinesisStreamsForLedger(config: QLDBPaginationConfiguration, input: ListJournalKinesisStreamsForLedgerCommandInput, ...additionalArguments: any): Paginator<ListJournalKinesisStreamsForLedgerCommandOutput>;
