import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetGroup(config: IAMPaginationConfiguration, input: GetGroupCommandInput, ...additionalArguments: any): Paginator<GetGroupCommandOutput>;
