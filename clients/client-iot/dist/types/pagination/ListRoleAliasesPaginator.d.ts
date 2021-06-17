import { ListRoleAliasesCommandInput, ListRoleAliasesCommandOutput } from "../commands/ListRoleAliasesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRoleAliases(config: IoTPaginationConfiguration, input: ListRoleAliasesCommandInput, ...additionalArguments: any): Paginator<ListRoleAliasesCommandOutput>;
