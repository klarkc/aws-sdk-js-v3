import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "../commands/ListIPSetsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIPSets(config: GuardDutyPaginationConfiguration, input: ListIPSetsCommandInput, ...additionalArguments: any): Paginator<ListIPSetsCommandOutput>;
