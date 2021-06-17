import { ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput } from "../commands/ListCodeSigningConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCodeSigningConfigs(config: LambdaPaginationConfiguration, input: ListCodeSigningConfigsCommandInput, ...additionalArguments: any): Paginator<ListCodeSigningConfigsCommandOutput>;
