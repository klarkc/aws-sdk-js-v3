import { ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput } from "../commands/ListDeploymentInstancesCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeploymentInstances(config: CodeDeployPaginationConfiguration, input: ListDeploymentInstancesCommandInput, ...additionalArguments: any): Paginator<ListDeploymentInstancesCommandOutput>;
