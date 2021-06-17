import { ListBuiltInSlotTypesCommandInput, ListBuiltInSlotTypesCommandOutput } from "../commands/ListBuiltInSlotTypesCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBuiltInSlotTypes(config: LexModelsV2PaginationConfiguration, input: ListBuiltInSlotTypesCommandInput, ...additionalArguments: any): Paginator<ListBuiltInSlotTypesCommandOutput>;
