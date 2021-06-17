import { ListDeploymentConfigsCommandInput, ListDeploymentConfigsCommandOutput } from "../commands/ListDeploymentConfigsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeploymentConfigs(config: CodeDeployPaginationConfiguration, input: ListDeploymentConfigsCommandInput, ...additionalArguments: any): Paginator<ListDeploymentConfigsCommandOutput>;
