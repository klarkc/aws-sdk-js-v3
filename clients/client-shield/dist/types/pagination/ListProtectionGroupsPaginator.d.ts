import { ListProtectionGroupsCommandInput, ListProtectionGroupsCommandOutput } from "../commands/ListProtectionGroupsCommand";
import { ShieldPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProtectionGroups(config: ShieldPaginationConfiguration, input: ListProtectionGroupsCommandInput, ...additionalArguments: any): Paginator<ListProtectionGroupsCommandOutput>;
