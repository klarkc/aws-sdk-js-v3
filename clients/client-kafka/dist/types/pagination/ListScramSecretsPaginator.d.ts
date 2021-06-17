import { ListScramSecretsCommandInput, ListScramSecretsCommandOutput } from "../commands/ListScramSecretsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListScramSecrets(config: KafkaPaginationConfiguration, input: ListScramSecretsCommandInput, ...additionalArguments: any): Paginator<ListScramSecretsCommandOutput>;
