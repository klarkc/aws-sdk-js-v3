import { ListResponsePlansCommandInput, ListResponsePlansCommandOutput } from "../commands/ListResponsePlansCommand";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResponsePlans(config: SSMIncidentsPaginationConfiguration, input: ListResponsePlansCommandInput, ...additionalArguments: any): Paginator<ListResponsePlansCommandOutput>;
