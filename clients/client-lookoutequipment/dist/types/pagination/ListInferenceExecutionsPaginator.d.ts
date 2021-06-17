import { ListInferenceExecutionsCommandInput, ListInferenceExecutionsCommandOutput } from "../commands/ListInferenceExecutionsCommand";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInferenceExecutions(config: LookoutEquipmentPaginationConfiguration, input: ListInferenceExecutionsCommandInput, ...additionalArguments: any): Paginator<ListInferenceExecutionsCommandOutput>;
