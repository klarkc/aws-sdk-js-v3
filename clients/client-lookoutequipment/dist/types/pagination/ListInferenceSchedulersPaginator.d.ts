import { ListInferenceSchedulersCommandInput, ListInferenceSchedulersCommandOutput } from "../commands/ListInferenceSchedulersCommand";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInferenceSchedulers(config: LookoutEquipmentPaginationConfiguration, input: ListInferenceSchedulersCommandInput, ...additionalArguments: any): Paginator<ListInferenceSchedulersCommandOutput>;
