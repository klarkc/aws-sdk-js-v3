import { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "../commands/GetTableVersionsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTableVersions(config: GluePaginationConfiguration, input: GetTableVersionsCommandInput, ...additionalArguments: any): Paginator<GetTableVersionsCommandOutput>;
