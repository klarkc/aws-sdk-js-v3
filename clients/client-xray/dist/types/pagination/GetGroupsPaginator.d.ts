import { GetGroupsCommandInput, GetGroupsCommandOutput } from "../commands/GetGroupsCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetGroups(config: XRayPaginationConfiguration, input: GetGroupsCommandInput, ...additionalArguments: any): Paginator<GetGroupsCommandOutput>;
