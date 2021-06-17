import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import { LakeFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPermissions(config: LakeFormationPaginationConfiguration, input: ListPermissionsCommandInput, ...additionalArguments: any): Paginator<ListPermissionsCommandOutput>;
