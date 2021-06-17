import { ListProvisionedConcurrencyConfigsCommandInput, ListProvisionedConcurrencyConfigsCommandOutput } from "../commands/ListProvisionedConcurrencyConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProvisionedConcurrencyConfigs(config: LambdaPaginationConfiguration, input: ListProvisionedConcurrencyConfigsCommandInput, ...additionalArguments: any): Paginator<ListProvisionedConcurrencyConfigsCommandOutput>;
