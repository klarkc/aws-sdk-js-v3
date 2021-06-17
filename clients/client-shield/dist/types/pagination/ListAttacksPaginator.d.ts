import { ListAttacksCommandInput, ListAttacksCommandOutput } from "../commands/ListAttacksCommand";
import { ShieldPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAttacks(config: ShieldPaginationConfiguration, input: ListAttacksCommandInput, ...additionalArguments: any): Paginator<ListAttacksCommandOutput>;
