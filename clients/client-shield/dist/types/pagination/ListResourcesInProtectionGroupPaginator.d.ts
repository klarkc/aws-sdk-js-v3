import { ListResourcesInProtectionGroupCommandInput, ListResourcesInProtectionGroupCommandOutput } from "../commands/ListResourcesInProtectionGroupCommand";
import { ShieldPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResourcesInProtectionGroup(config: ShieldPaginationConfiguration, input: ListResourcesInProtectionGroupCommandInput, ...additionalArguments: any): Paginator<ListResourcesInProtectionGroupCommandOutput>;
