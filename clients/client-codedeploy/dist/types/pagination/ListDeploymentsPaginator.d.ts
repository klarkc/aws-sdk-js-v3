import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeployments(config: CodeDeployPaginationConfiguration, input: ListDeploymentsCommandInput, ...additionalArguments: any): Paginator<ListDeploymentsCommandOutput>;
