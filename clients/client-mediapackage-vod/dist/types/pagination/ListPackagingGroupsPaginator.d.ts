import { ListPackagingGroupsCommandInput, ListPackagingGroupsCommandOutput } from "../commands/ListPackagingGroupsCommand";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPackagingGroups(config: MediaPackageVodPaginationConfiguration, input: ListPackagingGroupsCommandInput, ...additionalArguments: any): Paginator<ListPackagingGroupsCommandOutput>;
