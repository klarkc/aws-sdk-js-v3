import { ListMailboxPermissionsCommandInput, ListMailboxPermissionsCommandOutput } from "../commands/ListMailboxPermissionsCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMailboxPermissions(config: WorkMailPaginationConfiguration, input: ListMailboxPermissionsCommandInput, ...additionalArguments: any): Paginator<ListMailboxPermissionsCommandOutput>;
