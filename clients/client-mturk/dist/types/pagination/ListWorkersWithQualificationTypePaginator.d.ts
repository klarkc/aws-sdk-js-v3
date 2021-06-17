import { ListWorkersWithQualificationTypeCommandInput, ListWorkersWithQualificationTypeCommandOutput } from "../commands/ListWorkersWithQualificationTypeCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkersWithQualificationType(config: MTurkPaginationConfiguration, input: ListWorkersWithQualificationTypeCommandInput, ...additionalArguments: any): Paginator<ListWorkersWithQualificationTypeCommandOutput>;
