import { ListQualificationRequestsCommandInput, ListQualificationRequestsCommandOutput } from "../commands/ListQualificationRequestsCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQualificationRequests(config: MTurkPaginationConfiguration, input: ListQualificationRequestsCommandInput, ...additionalArguments: any): Paginator<ListQualificationRequestsCommandOutput>;
