import { ListSlotTypesCommandInput, ListSlotTypesCommandOutput } from "../commands/ListSlotTypesCommand";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSlotTypes(config: LexModelsV2PaginationConfiguration, input: ListSlotTypesCommandInput, ...additionalArguments: any): Paginator<ListSlotTypesCommandOutput>;
