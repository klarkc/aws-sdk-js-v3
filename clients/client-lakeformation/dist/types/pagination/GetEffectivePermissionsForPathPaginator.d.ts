import { GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput } from "../commands/GetEffectivePermissionsForPathCommand";
import { LakeFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetEffectivePermissionsForPath(config: LakeFormationPaginationConfiguration, input: GetEffectivePermissionsForPathCommandInput, ...additionalArguments: any): Paginator<GetEffectivePermissionsForPathCommandOutput>;
