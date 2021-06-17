import { GetSlotTypeVersionsCommandInput, GetSlotTypeVersionsCommandOutput } from "../commands/GetSlotTypeVersionsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSlotTypeVersions(config: LexModelBuildingServicePaginationConfiguration, input: GetSlotTypeVersionsCommandInput, ...additionalArguments: any): Paginator<GetSlotTypeVersionsCommandOutput>;
