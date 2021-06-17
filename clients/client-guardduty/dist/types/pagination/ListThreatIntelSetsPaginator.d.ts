import { ListThreatIntelSetsCommandInput, ListThreatIntelSetsCommandOutput } from "../commands/ListThreatIntelSetsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThreatIntelSets(config: GuardDutyPaginationConfiguration, input: ListThreatIntelSetsCommandInput, ...additionalArguments: any): Paginator<ListThreatIntelSetsCommandOutput>;
