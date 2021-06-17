import { GetSlotTypesCommandInput, GetSlotTypesCommandOutput } from "../commands/GetSlotTypesCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSlotTypes(config: LexModelBuildingServicePaginationConfiguration, input: GetSlotTypesCommandInput, ...additionalArguments: any): Paginator<GetSlotTypesCommandOutput>;
