import { ListEngagementsCommandInput, ListEngagementsCommandOutput } from "../commands/ListEngagementsCommand";
import { SSMContactsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEngagements(config: SSMContactsPaginationConfiguration, input: ListEngagementsCommandInput, ...additionalArguments: any): Paginator<ListEngagementsCommandOutput>;
