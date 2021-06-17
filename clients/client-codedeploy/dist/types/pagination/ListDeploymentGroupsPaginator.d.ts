import { ListDeploymentGroupsCommandInput, ListDeploymentGroupsCommandOutput } from "../commands/ListDeploymentGroupsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeploymentGroups(config: CodeDeployPaginationConfiguration, input: ListDeploymentGroupsCommandInput, ...additionalArguments: any): Paginator<ListDeploymentGroupsCommandOutput>;
