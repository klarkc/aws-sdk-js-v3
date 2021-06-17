import { ListIncidentRecordsCommandInput, ListIncidentRecordsCommandOutput } from "../commands/ListIncidentRecordsCommand";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIncidentRecords(config: SSMIncidentsPaginationConfiguration, input: ListIncidentRecordsCommandInput, ...additionalArguments: any): Paginator<ListIncidentRecordsCommandOutput>;
