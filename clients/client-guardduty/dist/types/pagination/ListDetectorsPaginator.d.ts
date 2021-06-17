import { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "../commands/ListDetectorsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDetectors(config: GuardDutyPaginationConfiguration, input: ListDetectorsCommandInput, ...additionalArguments: any): Paginator<ListDetectorsCommandOutput>;
