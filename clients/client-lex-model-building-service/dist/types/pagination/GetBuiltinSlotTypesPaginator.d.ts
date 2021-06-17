import { GetBuiltinSlotTypesCommandInput, GetBuiltinSlotTypesCommandOutput } from "../commands/GetBuiltinSlotTypesCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBuiltinSlotTypes(config: LexModelBuildingServicePaginationConfiguration, input: GetBuiltinSlotTypesCommandInput, ...additionalArguments: any): Paginator<GetBuiltinSlotTypesCommandOutput>;
