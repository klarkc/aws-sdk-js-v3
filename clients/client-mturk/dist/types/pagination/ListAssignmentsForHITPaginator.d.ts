import { ListAssignmentsForHITCommandInput, ListAssignmentsForHITCommandOutput } from "../commands/ListAssignmentsForHITCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssignmentsForHIT(config: MTurkPaginationConfiguration, input: ListAssignmentsForHITCommandInput, ...additionalArguments: any): Paginator<ListAssignmentsForHITCommandOutput>;
