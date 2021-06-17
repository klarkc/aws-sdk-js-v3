import { ListHITsCommandInput, ListHITsCommandOutput } from "../commands/ListHITsCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHITs(config: MTurkPaginationConfiguration, input: ListHITsCommandInput, ...additionalArguments: any): Paginator<ListHITsCommandOutput>;
