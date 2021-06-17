import { ListHITsForQualificationTypeCommandInput, ListHITsForQualificationTypeCommandOutput } from "../commands/ListHITsForQualificationTypeCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHITsForQualificationType(config: MTurkPaginationConfiguration, input: ListHITsForQualificationTypeCommandInput, ...additionalArguments: any): Paginator<ListHITsForQualificationTypeCommandOutput>;
