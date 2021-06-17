import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFindings(config: InspectorPaginationConfiguration, input: ListFindingsCommandInput, ...additionalArguments: any): Paginator<ListFindingsCommandOutput>;
