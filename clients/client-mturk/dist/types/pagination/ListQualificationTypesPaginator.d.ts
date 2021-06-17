import { ListQualificationTypesCommandInput, ListQualificationTypesCommandOutput } from "../commands/ListQualificationTypesCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListQualificationTypes(config: MTurkPaginationConfiguration, input: ListQualificationTypesCommandInput, ...additionalArguments: any): Paginator<ListQualificationTypesCommandOutput>;
