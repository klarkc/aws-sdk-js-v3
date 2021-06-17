import { ListSecretsCommandInput, ListSecretsCommandOutput } from "../commands/ListSecretsCommand";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSecrets(config: SecretsManagerPaginationConfiguration, input: ListSecretsCommandInput, ...additionalArguments: any): Paginator<ListSecretsCommandOutput>;
